import { combineReducers } from 'redux';
import {
  SUBMIT_LIST,
  SUBMIT_NEW_CARD,
  HANDLE_DROP,
  ARCHIVE_POST,
} from './../Actions/ActionTypes'
import uniqueId from 'lodash/uniqueId'

const ListReducer = (state = {}, action) => {
  const listId = uniqueId("list_");
  switch (action.type) {
    case SUBMIT_LIST:
      return {
        ...state,
        [listId]: {
          name: action.payload,
          id: listId,
          isArchived: false,
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
      const currentList = state[newListId]; // list that's going to be taking the new card
      currentList.cards.push({ name: cardName, cardId, listId: newListId }) // add the card to the list
      const removeCard = state[listId].cards.find(card => card.cardId === cardId); // find the card to remove
      const oldList = state[listId].cards.splice(removeCard, 1) // remove the card from the list
      currentList.cards.push({
        name: cardName,
        cardId,
        listId: newListId
      });
      return {
        ...state,
        [newListId]: currentList,
      }
    case ARCHIVE_POST:
      return {
        ...state,
      }
    default:
      return state;
  }
}

const ActiveBoardReducer = combineReducers({
  listItems: ListReducer,
})

export default ActiveBoardReducer;