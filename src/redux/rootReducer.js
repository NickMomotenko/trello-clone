import { combineReducers } from "redux";

import { dataReducer } from "./reducers/dataReducer";
import { messagesReducer } from "./reducers/messagesReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  messages: messagesReducer,
});
