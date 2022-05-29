import React from 'react';
import { v4 } from 'uuid';
import NewMerchForm from './NewMerchForm';
import EditMerchForm from './EditMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';


class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainMerchList: [
        {
          item: "Tshirt",
          size: "X-Small",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Small",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Small",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Small",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
      ],
      formVisibleOnPage: false,
      selectedMerch: null,
      editing: false
    };
  }


  // For button that renders with each view
  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }


// CRUD: Create New Merch

handleAddingNewMerchToList = (newMerch) => {
  const newMainMerchList = this.state.mainMerchList.concat(newMerch);
  this.setState({
    mainMerchList: newMainMerchList,
    formVisibleOnPage: false 
  });
}

// CRUD: Read New Merch
handleAddingNewMerchToList = (newMerch) => {
  const newMainMerchList = this.state.mainMerchList.concat(newMerch);
  this.setState({
    mainMerchList: newMainMerchList,
    formVisibleOnPage: false
  });
}

// CRUD: Update New Merch

// CRUD: Delete New Merch





render() {
  let currentlyVisibleState = null;
  let buttonText = null;

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MerchControl;