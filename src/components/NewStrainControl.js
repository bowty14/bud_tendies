import React from 'react';
import NewStrainForm from './NewStrainForm';
import StrainList from './StrainList';
import StrainDetail from './StrainDetail';
import EditStrainForm from './EditStrainForm';

class StrainControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterStrainList: [],
      selectedStrain: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedStrain != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedStrain: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewStrainToList = (newStrain) => {
    const newMasterStrainList = this.state.masterStrainList.concat(newStrain);
    this.setState({ masterStrainList: newMasterStrainList, formVisibleOnPage: false });
  }

  handleChangingSelectedStrain = (id) => {
    const selectedStrain = this.state.masterStrainList.filter(strain => strain.id === id)[0];
    this.setState({ selectedStrain: selectedStrain });
  }


  handlDeletingStrain = (id) => {
    const newMasterStrainList = this.state.masterStrainList.filter(strain => strain.id !== id);
    this.setState({
      masterStrainList: newMasterStrainList,
      slelectedStrain: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingStrainInList = (strainToEdit) => {
    const editedMasterStrainList = this.state.masterStrainList.filter(strain => strain.id !== this.state.selectedStrain.id).concat(strainToEdit);
    this.setState({
      masterStrainList: editedMasterStrainList,
      editing: false,
      selectedStrain: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditStrainForm strain={this.state.selectedStrain} onEditTicket={this.handleEditingStrainInList} />
      buttonText = "Return to Strain List";
    } else if (this.state.selectedStrain != null) {
      currentlyVisibleState = <StrainDetail
        strain={this.state.selectedStrain}
        onClickingDelete={this.handleDeletingStrain}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Strain List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStrainForm onNewStrainCreation={this.handleAddingNewStrainToList} />
      buttonText = "Return to Strain List";
    } else {
      currentlyVisibleState = <StrainList strainList={this.state.masterStrainList} onStrainSelection={this.handleChangingSelectedStrain} />
      buttonText = "Add Strain";
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default StrainControl;