import { USER_FETCH_SUCCEEDED, FETCH_USER, ADD_USER, UPDATE_USER_ROLE,  UPDATE_USER_ROLE_SUCCEEDED } from '../constants';

const users = (state:any = [], action : any) => {

  switch (action.type) {
    case ADD_USER:

      console.log(ADD_USER);
      return state;   

    case UPDATE_USER_ROLE:        
      console.log(UPDATE_USER_ROLE);
      return state;  

    case UPDATE_USER_ROLE_SUCCEEDED:        
      console.log(UPDATE_USER_ROLE_SUCCEEDED);
      return {       
        success : true,
        timestamp : Date.now(),
        updateOk : true        
      };     
         
    case USER_FETCH_SUCCEEDED:
      console.log(USER_FETCH_SUCCEEDED, action);
      state.users = action.users;
      state.success = true;
      return {
        users : action.users, 
        success : true,
        timestamp : Date.now()        
      };
     
    case FETCH_USER:
        console.log(FETCH_USER, state);
        return state;     
    default:
      return state;
  }
}
​
export default users;