import { v4 as uuid } from "uuid";

const initialState = [{ id: uuid(), data: [], title: "Nick Sunflower" }];

export const messagesReducer = (state = initialState, action) => {
  return state;
};
