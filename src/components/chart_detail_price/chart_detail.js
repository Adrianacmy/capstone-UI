import React, { Component } from 'react';
import { Line, Bar, LinePath } from '@vx/shape';
import { withTooltip, Tooltip } from '@vx/tooltip';
import { localPoint } from '@vx/event';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';

const width = window.innerWidth; //document.getElementById("mydiv").offsetWidth
const height = window.innerHeight * 0.6;
// const startx = window.innerWidth*0.3/2
// const heighty = window.innerHeight * 0.4/2;

const formatDate = timeFormat("%b %d, '%y");
const xSelector = d => new Date(d.date);
const ySelector = d => d.price;

const bisectDate = bisector(xSelector).left;
console.log(bisectDate);

class ChartDetail extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      data: null
    };
  }
  async componentDidMount() {
    // console.log(this.props);

    const res = await fetch(
      `https://min-api.cryptocompare.com/data/histoday?fsym=${
        this.props.sym
      }&tsym=USD&limit=365`
    );
    const data = await res.json();

    this.setState({
      data: data.Data.map(item => {
        return {
          date: item.time,
          price: item.close
        };
      })
    });
  }

  handleTooltip = ({ event, data, xSelector, xScale, yScale }) => {
    const { showTooltip } = this.props;
    const { x } = localPoint(event);
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && d1.date) {
      d = x0 - xSelector(d0) > xSelector(d1) - x0 ? d1 : d0;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(xSelector(d)),
      tooltipTop: yScale(ySelector(d))
    });
  };

  render() {
    const { data } = this.state;
    const {
      showTooltip,
      hideTooltip,
      tooltipData,
      tooltipTop,
      tooltipLeft
    } = this.props;

    if (!data) return null;

    const padding = 100;
    const xMax = width - padding;
    const yMax = height - padding;

    const xScale = scaleTime({
      range: [padding, xMax],
      domain: extent(data, xSelector)
    });

    const dataMax = max(data, ySelector);
    const yScale = scaleLinear({
      range: [yMax, padding],
      domain: [0, dataMax + dataMax / 3]
    });

    return (
      <div id="oneChart" className="center col s12 m7">
        <svg width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="#1a237e" />
          <LinePath
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={xSelector}
            y={ySelector}
            strokeWidth={2}
            stroke="#FFF"
            strokeLinecap="round"
            fill="transparent"
          />
          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            data={data}
            onMouseMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xSelector,
                xScale,
                yScale
              })}
            onMouseLeave={data => event => hideTooltip()}
            onTouchEnd={data => event => hideTooltip()}
            onTouchMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xSelector,
                xScale,
                yScale
              })}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: 0 }}
                to={{ x: tooltipLeft, y: yMax }}
                stroke="#5C77EB"
                strokeWidth={4}
                style={{ pointerEvents: 'none' }}
                strokeDasharray="4,6"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill="#5C77EB"
                stroke="white"
                strokeWidth={2}
                style={{ pointerEvents: 'none' }}
              />
            </g>
          )}
        </svg>
        {tooltipData && (
          <div>
            <Tooltip
              top={tooltipTop - 50}
              left={tooltipLeft - 36}
              style={{
                backgroundColor: '#ef6c00',
                color: '#FFF'
              }}
            >
              {`$${ySelector(tooltipData)}`}
            </Tooltip>
            <Tooltip
              top={yMax + 10}
              left={tooltipLeft}
              style={{
                transform: 'translateX(-50%)'
              }}
            >
              {formatDate(xSelector(tooltipData))}
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
}

export default withTooltip(ChartDetail);
