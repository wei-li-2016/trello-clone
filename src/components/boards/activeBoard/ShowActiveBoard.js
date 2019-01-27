import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import selectActiveBoard from './../../../Actions/SelectActiveBoard'
import enableListEditMode from './../../../Actions/ToggleListEditMode'
import submitList from './../../../Actions/SubmitList'
import ActiveBoardTitle from './ActiveBoardTitle'
import ListWrapper from './ListWrapper'
import CreateNewList from './CreateNewList'
import ListEditingMode from './ListEditingMode'

class ShowActiveBoard extends Component {
  static propTypes = {
    selectActiveBoard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      match, selectActiveBoard
    } = this.props
    selectActiveBoard(match.params.id)

  }

  getTitle = () => {
    return this.props.activeBoard.title
  }

  handleListSubmit = values => {
    console.log(values.listItem)
    this.props.submitList(values.listItem)
  }

  render() {
    const { activeBoard, enableListEditMode } = this.props
    if (activeBoard.isFetching) {
      return <div>loading...</div>
    }
    return (
      <div>
        <ActiveBoardTitle>
          {this.getTitle()}
        </ActiveBoardTitle>
        <ListWrapper>
          {
            activeBoard.isEditingList 
            ? <ListEditingMode onSubmit={this.handleListSubmit} />
            : <CreateNewList addList={enableListEditMode} />
          }
        </ListWrapper>
      </div>
    )
  }
}

function mapStateToProps({ activeBoard }) {
  return {
    activeBoard
  }
}

export default connect(mapStateToProps,
  { selectActiveBoard, enableListEditMode, submitList })(ShowActiveBoard)