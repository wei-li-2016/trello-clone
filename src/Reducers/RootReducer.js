import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import CreateBoardReducer from './CreateBoardReducer'
import BoardReducer from './BoardReducer'
import ActiveBoardReducer from './ActiveBoardReducer'


const RootReducer = combineReducers({
  form: formReducer,
  newBoard: CreateBoardReducer,
  boardsCollection: BoardReducer,
  activeBoard: ActiveBoardReducer
})

export default RootReducer
