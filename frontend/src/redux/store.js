import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk'
import { dataSekolahReducer, tambahSekolahReducer } from "./reducer";

const reducers = combineReducers({
    // guest
    dataSekolah: dataSekolahReducer,

    // member
    tambahSekolah: tambahSekolahReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store