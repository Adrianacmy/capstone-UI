import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../search/search_form';
import { SideNavItem, SideNav } from 'react-materialize';
import me from '../../assets/images/me.jpg';

import { Navbar, NavItem, Modal } from 'react-materialize';

export default () => {
  console.log(me);
  return (
    <div className="indigo darken-4">
      <Navbar
        brand="enBazaar"
        right
        className="container indigo darken-4 z-depth-0"
      >
        <SideNavItem
          userView
          user={{
            image: '/static/media/me.d3106e79.jpg',
            name: 'Bonnie Shen',
            email: 'Bonniek@gmail.com'
          }}
          className="hide-on-med-and-up purple darken-3"
        />

        <NavItem className="hide-on-med-and-up">
          <Modal
            header="Search Anything"
            trigger={<i className="material-icons">search</i>}
          >
            <div className="nav-wrapper">
              <SearchForm />
            </div>
          </Modal>
        </NavItem>
        <NavItem devider className="grey hide-on-med-and-up">
          <i className="material-icons">local_florist</i>Portfolio
        </NavItem>
        <SideNavItem href="#!icon" className="hide-on-med-and-up">
          <i className="material-icons">nature</i>Home
        </SideNavItem>
        <SideNavItem href="#!second" className="hide-on-med-and-up">
          <i className="fas fa-external-link" />News
        </SideNavItem>
        <SideNavItem subheader className="hide-on-med-and-up">
          <i className="material-icons">local_florist</i>Price
        </SideNavItem>
        <SideNavItem waves href="#!third" className="hide-on-med-and-up">
          <i className="material-icons">local_florist</i>History
        </SideNavItem>

        <NavItem href="#" className="hide-on-med-and-up">
          <i class="fas fa-cog" />Setting
        </NavItem>
        <NavItem href="components.html" className="hide-on-med-and-up">
          <i class="fas fa-question" />Help
        </NavItem>

        <div className="hide-on-med-and-down right">
          <NavItem>
            <Modal
              header="Search Anything"
              trigger={<i className="material-icons">search</i>}
            >
              <div className="nav-wrapper">
                <SearchForm style={{ width: '100vw' }} />
              </div>
            </Modal>
          </NavItem>
          <NavItem>Home</NavItem>
          <NavItem>News</NavItem>
          <NavItem>Account</NavItem>
        </div>
      </Navbar>
    </div>
  );
};
