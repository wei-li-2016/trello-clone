import { combineReducers } from 'redux';
import {
  SUBMIT_LIST,
  SUBMIT_NEW_CARD,
  HANDLE_DROP
} from './../Actions/ActionTypes'
import uniqueId from 'lodash/uniqueId'

const ListReducer = (state = {}, action) => {
  const listId = uniqueId("list_");
  switch(action.type) {
    case SUBMIT_LIST:
      return {
        ...state,
        [listId]: {
          name: action.payload,
          id: listId,
          cards: []
        }
      };
    case SUBMIT_NEW_CARD:

      console.log(action.payload.cardName);
      const { listId, cardName, cardId } = action.payload;
      const currentList = state[listId];
      currentList.cards.push({
        name: cardName,
        cardId: cardId
      })
      return {
        ...state,
        [listId]: currentList,
      };
    
    case HANDLE_DROP:
      const { cardId, cardName, listId, newListId } = action.payload;
      const currentList = state[newListId];
      currentList.cards.push({
        name: cardName,
        cardId,
        listId: newListId
      });
      return {
        ...state,
        [newListId]: currentList
      }
    default: 
      return state;
  }
}

const ActiveBoardReducer = combineReducers({
  listItems: ListReducer,
})

export default ActiveBoardReducer;