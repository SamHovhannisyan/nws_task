interface category {
  id: number;
  name: string;
}
interface data {
  name: string;
  id: number;
  url: string;
  title: string;
  lessons: string;
  min: string;
  favorite?: boolean;
  new?: boolean;
  popular?: boolean;
}
type DataState = {
  data: data[];
  active: string;
};
type CategoryState = {
  categories: category[];
  selected: category | null;
};
type GetCategory = {
  type: string;
  payload: category[];
};

type CategoryAction = {
  type: string;
  payload: any;
};

type DispatchType = (args: CategoryAction) => CategoryAction;

type StoreType = {
  data: CategoryState;
};
