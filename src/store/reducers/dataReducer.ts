import { GET_FAVORITE, GET_ALL, GET_NEW, GET_POPULAR } from "../types";

const initialState: DataState = {
  data: [],
  active: "",
};

const dataReducer = (
  state: DataState = initialState,
  action: CategoryAction
): DataState => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        data: action.payload.filter((item: any) => item.popular === true),
        active: "Popular",
      };
    case GET_FAVORITE:
      return {
        ...state,
        data: action.payload.filter((item: any) => item.favorite === true),
        active: "Favorite",
      };
    case GET_POPULAR:
      return {
        ...state,
        data: action.payload.filter((item: any) => item.popular === true),
        active: "Popular",
      };
    case GET_NEW:
      return {
        ...state,
        data: action.payload.filter((item: any) => item.new === true),
        active: "New",
      };
    default:
      return state;
  }
};

export default dataReducer;
