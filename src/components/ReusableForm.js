import React from "react";
import PropTypes from "prop-types";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from "react-bootstrap/FormControl";
// import InputGroupPrepend from "react-bootstrap/InputGroupPrepend";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form>
        <div className='form-group'>
            <input type="text" name="strain-name" id="strain-name" placeholder='Strain Name' />
        </div>
        <div className='form-group'>
            <input type="text" name="strain-price" id="price" placeholder='Price' />
        </div>
        <div className='form-group'>
            <input type="text" name="strain-type" id="strain-type" placeholder='Type' />
        </div>
        <div className='form-group'>
            <input type="text" name="strain-quant" id="strain-quant" placeholder='Quantity' />
        </div>
        <div className='form-group'>
                <textarea id="description" name="description" placeholder="Please enter strain description" rows="3"></textarea>
        </div>
      </form>
    </React.Fragment >
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
