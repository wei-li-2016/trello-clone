import _ from 'lodash'
import Store from './../Store'
import { SELECT_ACTIVE_BOARD } from '../Actions/ActionTypes'

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    case SELECT_ACTIVE_BOARD:
      if (Store.getState().boardCollection) {
        let boardCollection = Store.getState().boardsCollection
        let activeBoard = _.find(boardsCollection, board => {
          return board.id === parseInt(action.payload)
        })

        console.log(activeBoard)
        localStorage.setItem('activeBoard', JSON.stringify(activeBoard))
        return {
          ...state,
          activeBoard,
        }
      }
      return { ...state }
    default:
      return {...state}
  } 
}