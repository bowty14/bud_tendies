import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewStrainForm(props) {

  function handleNewStrainFormSubmission(event) {
    event.preventDefault();
    props.onNewStrainCreation({
      name: event.target.name.value, price: event.target.price.value, type: event.target.type.value,
      description: event.target.type.value, quantity: event.target.quantity.value, id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewStrainFormSubmission}
        buttonText="Add Strain" />
    </React.Fragment>

  );
}

NewStrainForm.propTypes = {
  onNewStrainCreation: PropTypes.func
};

export default NewStrainForm;