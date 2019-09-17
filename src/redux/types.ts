export default interface IId {
  id: Number;
}
export default interface ITask {
  id: Number;
  content: String;
  completed: Boolean;
  priority: String;
}

export interface TodoState {
  todos: [
    {
      id: Number;
      content: String;
      completed: Boolean;
      priority: String;
    }
  ];
}
