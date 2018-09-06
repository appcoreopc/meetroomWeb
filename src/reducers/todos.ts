type Action = ActionA;

interface ActionA {
    type: string;
    text: string,
    id : string
}

const todos = (state:any = [], action : Action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('reducer logging todo');

      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TEST': 
       console.log('test')
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state
  }
}
​
export default todos