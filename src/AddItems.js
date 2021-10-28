import React from "react";
import { useDispatch } from "react-redux";
import { add_item, remove_item, TotalCost, TotalItems } from "./store/itemsDux";
export default function AddItems() {
  const dispatch = useDispatch();
  return (
   
    <div>
      items = {TotalItems()}
      <br />
      Cost ={TotalCost()}
      <br />
      <button
        onClick={() => {
          dispatch(add_item(50));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(remove_item(50));
        }}
      >
        -
      </button>
      BURGER : 50RS
      <br />
      <button
        onClick={() => {
          dispatch(add_item(100));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(remove_item(100));
        }}
      >
        -
      </button>
      PIZZA : 100RS
      <br />
      <button
        onClick={() => {
          dispatch(add_item(150));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(remove_item(150));
        }}
      >
        -
      </button>
      CHICKEN FRY : 150RS
      <br />
    </div>
  );
}