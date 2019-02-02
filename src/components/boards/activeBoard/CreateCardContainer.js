import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux'
import submitNewCard from './../../../Actions/SubmitNewCard';
import BoardTitleInput from './../boardCreation/BoardTitleInput';
import Card from './Card';
import uniqueId from 'lodash/uniqueId';

class CreateCardContainer extends Component {

  submit = values => {
    console.log(values)
    this.props.submitNewCard(values.cardName, uniqueId('cardItem_'), this.props.listId)
  }

  renderCard = () => {
    const { activeBoardData } = this.props;
    return activeBoardData.listItems[this.props.listId].cards.map((card, i) => {
      return <Card key={i} title={card.name} />
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.submit)}>
          <label>
            <Field
              type="text"
              component={BoardTitleInput}
              name="cardName"
            />
          </label>
        </form>
        {this.renderCard()}
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.cardName) {
    errors.cardName = 'oops!';
  }

  return errors;
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('cardName'));
}

function mapStateToProps({activeBoardData}) {
  return {activeBoardData}
}

export default reduxForm({
  validate,
  form: 'cardName',
  onSubmitSuccess: afterSubmit,
})(connect(activeBoardData, { submitNewCard })(CreateCardContainer));