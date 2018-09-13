type Action = ActionA;

interface ActionA {
    type: string;
    text: string,
    id : string
}

const todosIt = (state:any = [], action : any) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('ADD_USER');
      return state;   
    case 'USER_FETCH_SUCCEEDED':
      console.log('USER_FETCH_SUCCEEDED', action);
      state.users = action.users;
      state.success = true;
      return {
        users : action.users, 
        success : true        
      };
     
    case 'FETCH_USER':
        console.log('FETCH_USER', state);
        return state;     
    case 'TEST': 
       console.log('test')
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state;
  }
}
​
export default todosIt