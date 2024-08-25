import { createStore } from 'redux'
import reducer from "./reducer/reducer"

// const store = configureStore({
//     reducer: counterSlice.reducer
//   })

let store = createStore(reducer)



export default store;