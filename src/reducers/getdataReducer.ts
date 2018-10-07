import { USER_FETCH_SUCCEEDED, FETCH_USER, ADD_USER, UPDATE_USER_ROLE,  UPDATE_USER_ROLE_SUCCEEDED } from '../constants';

const getdatareducer = (state:any = [], action : any) => {

  switch (action.type) {
    case 'GET_DATA':
      console.log('getting data reducer');
      return state;      
     case 'GETDATA_OK':
      console.log('getting data reducer success lal.', action);
      return {
        sysadmin : action.sysadmin
      };        
    default:

      return state;
  }
}
​
export default getdatareducer;