import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import throttle from 'lodash/throttle'
import RootReducer from './Reducers/RootReducer'
import { loadState, saveState } from './Utils/SyncBoardCollectionLocalStorage'

const middleware = applyMiddleware(thunk);
const persistedState = loadState();

const Store = createStore(
  RootReducer,
  persistedState,
  composeWithDevTools(middleware),
)

Store.subscribe(throttle(() => {
  saveState({
    boardsCollection: Store.getState().boardsCollection,
  })
}, 1000))

export default Store;