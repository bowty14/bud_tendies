import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditStrainForm(props) {
  const { strain } = props;
  function handleEditStrainFormSumission(event) {
    event.preventDefault();
    props.onEditStrain({ names: event.target.names.value, price: event.target.price.value, type: event.target.value, id: strain.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditStrainFormSumission}
        buttonText="Update Strain" />
    </React.Fragment >
  );
}


EditStrainForm.propTypes = {
  onEditStrain: PropTypes.func
};

export default EditStrainForm;