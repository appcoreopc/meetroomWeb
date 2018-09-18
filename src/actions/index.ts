
import { USER_FETCH_SUCCEEDED, FETCH_USER, ADD_USER, UPDATE_USER_ROLE,  UPDATE_USER_ROLE_SUCCEEDED } from '../constants';

export const addUser = (text : string) => {   
    return {
     type: ADD_USER,    
     text
    }   
};

export const fetchUser = () => {   
    return {
     type: FETCH_USER,    
    }   
};

export const setUserRole = (userIds : string[], roleId : number) => ({
    type: UPDATE_USER_ROLE,    
    userIds : userIds, 
    roleId : roleId
});

