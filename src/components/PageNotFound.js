import React, { PropTypes } from 'react';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <h1>
      Page not found - the path, {location.pathname},
      did not match any React Router routes.
    </h1>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
