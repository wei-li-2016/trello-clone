import Store from './../Store'
import { SELECT_ACTIVE_BOARD } from '../Actions/ActionTypes'

const initialState = {
  id: null,
  title: null,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_ACTIVE_BOARD:
      let boardCollection = Store.getState().boardsCollection
      let selectedBoard = boardCollection.find(tem => item)
      return {
        ...state,
        id: selectedBoard.id,
        title: selectedBoard.title
      }
    default:
      return state
  } 
}