import { dataSekolahActions, tambahSekolahActions } from "./actions";
import { createReducer, initData } from "./utils";

export const dataSekolahReducer = createReducer({ ...initData }, dataSekolahActions)
export const tambahSekolahReducer = createReducer({ ...initData }, tambahSekolahActions)