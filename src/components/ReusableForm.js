import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className="text-left">
        <div className="form-group">
          <label for="item">Item</label>

        </div>
        <div className="form-group">
          <label for="size">Size</label>

        </div>
        <div className="form-group">
          <label for="color">Color</label>

        </div>
        <div className="form-group">
          <label for="quantity">Quantity</label>

        </div>
        <div className="form-group">
          <label for="price">Price</label>

        </div>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
