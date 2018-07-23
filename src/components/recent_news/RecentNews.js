import React from 'react';
import { connect } from 'react-redux';

import welcome from '../../assets/images/welcome.png';
import { fetchNews } from '../../actions/index';

import { Col, Card, CardTitle, Row } from 'react-materialize';

class RecentNews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    const { recentNews } = this.props;
    if (recentNews) {
      return (
        <div id="recent-news" className="hide-on-small-and-down">
          <h4>Recent News</h4>
          <div className="card-box">
            {recentNews.map(news => {
              if (news.title && news.body && news.imageurl && news.id) {
                return (
                  <Row key={news.id}>
                    <Col>
                      <a href={news.url}>
                        <Card
                          actions={[
                            <a href={news.url}>{news.title.substr(0, 40)}</a>
                          ]}
                          horizontal
                          header={<CardTitle image={news.imageurl} />}
                          className="z-depth-0"
                        >
                          <p className="flow-text">
                            {news.body.substr(0, 120)}
                          </p>
                        </Card>
                      </a>
                    </Col>
                  </Row>
                );
              }
            })}
            <br />
            <br />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    recentNews: state.recentNews
  };
};

export default connect(
  mapStateToProps,
  { fetchNews }
)(RecentNews);
