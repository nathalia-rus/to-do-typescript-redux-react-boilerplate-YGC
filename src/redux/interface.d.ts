// to do object

export interface ITodo {
  id: Number;
  content: String;
  completed: Boolean;
  priority: String;
}

// AppProps

export interface IAppProps {
  todos: ITodo[];
  getTodos: () => Promise<any>;
}

// AppState

export interface IAppState {
  isLoading: boolean;
}

// StoreData

export interface IStoreData {
  todos: ITodo[];
}
