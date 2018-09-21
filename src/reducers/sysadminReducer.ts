import { FETCH_ADMIN_INFO, FETCH_ADMIN_INFO_SUCCESS } from '../constants';

const sysadmin = async (state:any = [], action : any) => {
  
  switch (action.type) {  
    case FETCH_ADMIN_INFO:      
      console.log(FETCH_ADMIN_INFO, action);      
      return {
        username : action.username
      };
    case FETCH_ADMIN_INFO_SUCCESS:  
      let sysAdminUser =  await action.sysadmin.json();
      console.log('printing data from result ', sysAdminUser);   
      state = {
        sysadmin : sysAdminUser, 
        success : true,
        timestamp : Date.now()        
      };    
      return state;
    default:
      return state;
  }
}
​
export default sysadmin;