import { combineReducers } from "redux";

import { dataReducer } from "./reducers/dataReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
});
