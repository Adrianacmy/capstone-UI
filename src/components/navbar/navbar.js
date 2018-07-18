import React from 'react';
import { Link } from 'react-router-dom';

import {
  Navbar,
  NavItem,
  Dropdown,
  Icon,
  Modal,
  Button
} from 'react-materialize';

export default () => {
  return (
    <Navbar brand="logo" right>
      <NavItem>
        <Modal
          header="Search Anything"
          trigger={<i className="material-icons">search</i>}
        >
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" for="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </Modal>
      </NavItem>
      <NavItem onClick={() => console.log('test click')}>enBazaar</NavItem>
      <NavItem href="components.html">Components</NavItem>
    </Navbar>
  );
};
