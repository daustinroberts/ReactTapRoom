import React from 'react';
import NewBeerForm from './NewBeerForm';
import PropTypes from 'prop-types';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation=this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage:true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm onNewBeerCreation={this.props.onNewBeerCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleShootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}


NewBeerControl.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerControl;
