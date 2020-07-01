import React from "react";
import Strain from './Strain';
import PropTypes from "prop-types";


function StrainList(props) {
  return (
    <React.Fragment>

      {props.strainList.map((strain) =>
        <Strain
          whenStrainClicked={props.onStrainSelection}
          name={strain.names}
          price={strain.price}
          type={strain.type}
          description={strain.description}
          quantity={strain.quantity}
          id={strain.id}
          key={strain.id}
        />
      )}
    </React.Fragment >
  );
}

StrainList.propTypes = {
  strainList: PropTypes.array,
  onStrainSelection: PropTypes.func
}

export default StrainList;