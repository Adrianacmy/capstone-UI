import React from 'react';

export default () => {
  return (
    <form>
      <div className="input-field col s12">
        <input id="search" type="search" required />
        <label className="label-icon" htmlfor="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </form>
  );
};
