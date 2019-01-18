import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import CreateBoardContainer from './boardCreation/CreateBoardContainer';
import ShowAllBoards from './ShowAllBoards';

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
`

class BoardContainer extends Component {

  renderAllBoard = () => {
    const { boardsCollection } = this.props
    return boardsCollection.map(board => {
      return <ShowAllBoards key={board.title} title={board.title} />
    })
  }

  UNSAFE_componentWillMount(nextProps) {
    if(this.props.boardsCollection.length !== nextProps.boardsCollection.length) {
      this.renderAllBoard()
      return true
    }
  }

  render() {
    return (
      <Wrapper>
        <CreateBoardContainer />
        {this.renderAllBoard()}
      </Wrapper>
    )
  }
}

function mapStateToProps({boardsCollection}) {
  return {
    boardsCollection
  }
}

export default connect(mapStateToProps)(BoardContainer);
