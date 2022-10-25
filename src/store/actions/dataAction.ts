import { GET_ALL, GET_FAVORITE, GET_NEW, GET_POPULAR } from "../types";
import { DataFake } from "../../utils/fakeData";

export function getData() {
  return (dispatch: DispatchType) => {
    dispatch({
      payload: DataFake,
      type: GET_ALL,
    });
  };
}

export function getPopular() {
  return (dispatch: DispatchType) => {
    dispatch({
      payload: DataFake,
      type: GET_POPULAR,
    });
  };
}

export function getFavorite() {
  return (dispatch: DispatchType) => {
    dispatch({
      payload: DataFake,
      type: GET_FAVORITE,
    });
  };
}

export function getNew() {
  return (dispatch: DispatchType) => {
    dispatch({
      payload: DataFake,
      type: GET_NEW,
    });
  };
}
