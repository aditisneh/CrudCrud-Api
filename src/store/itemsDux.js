import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//Reducers and actions
const slice = createSlice({
  name: "items",
  initialState: {
    total_cost: 0,
    total_item: 0,
  },
  reducers: {
    increment_cost: (items, action) => {
      items.total_cost = items.total_cost + action.payload;
    },
    decrement_cost: (items, action) => {
      const new_cost = items.total_cost - action.payload;
      items.total_cost = new_cost < 0 ? 0 : new_cost;
    },

    increment_item: (items, action) => {
      items.total_item = items.total_item + 1;
    },
    decrement_item: (items, action) => {
      const new_item = items.total_item - 1;
      items.total_item = new_item < 0 ? 0 : new_item;
    },
  },
});

// Actions
const { increment_cost, decrement_cost, increment_item, decrement_item } =
  slice.actions;
export default slice.reducer;

//Action triggers/creators
export const add_item = (cost) => (dispatch, getState) => {
  dispatch(increment_cost(cost));
  dispatch(increment_item());
  console.log("ADD ITEM: STATE:");
  console.log(getState()); // you have access to the entire state here
};

export const remove_item = (cost) => (dispatch, getState) => {
  dispatch(decrement_cost(cost));
  dispatch(decrement_item());
};

//Selectors
export const TotalItems = () =>
  useSelector((state) => state.entities.items.total_item);

export const TotalCost = () =>
  useSelector((state) => state.entities.items.total_cost);