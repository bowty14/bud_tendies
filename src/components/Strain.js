import React from 'react';
import PropTypes from 'prop-types';

function Strain(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.price}</h3>
      <h4>{props.type}</h4>
      <hr />
    </React.Fragment>

  );
}

Strain.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Strain;