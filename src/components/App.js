import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div>
      <nav className="red lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">Anthony Keba</a>
        </div>
      </nav>

      {children}

    </div>
  );
}

App.propTypes = propTypes;

export default App;
