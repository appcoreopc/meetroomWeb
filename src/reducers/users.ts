type Action = ActionA;

interface ActionA {
    type: string;
    text: string,
    id : string
}

const users = (state:any = [], action : Action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      console.log('USER_FETCH_SUCCEEDED');
      return 
            state.users;
      
    case 'USER_FETCH_ERROR': 
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
export default users