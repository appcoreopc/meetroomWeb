import { FETCH_ADMIN_INFO, FETCH_ADMIN_INFO_SUCCESS } from '../constants';

const sysadmin = (state:any = [], action : any) => {

  switch (action.type) {  
    case FETCH_ADMIN_INFO:      
      console.log(FETCH_ADMIN_INFO, action);      
      return {
        username : action.username
      };
    case FETCH_ADMIN_INFO_SUCCESS:
      console.log(FETCH_ADMIN_INFO_SUCCESS, action);
      state.users = action.users;
      state.success = true;
      return {
        sysadmin : action.sysadmin, 
        success : true,
        timestamp : Date.now()        
      };    
    default:
      return state;
  }
}
​
export default sysadmin;