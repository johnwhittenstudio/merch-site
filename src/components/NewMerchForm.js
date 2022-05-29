import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewMerchForm(props){

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({item: event.target.item.value, size: event.target.size.value, color: event.target.color.value, price: event.target.price.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewMerchFormSubmission}
        buttonText="Add to Cart" />
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;