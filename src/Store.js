import { createStore } from 'redux'
import RootReducer from './Reducers/RootReducer'

const Store = createStore(
  RootReducer
)

export default Store;