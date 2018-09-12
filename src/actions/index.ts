

export const addUser = (text : string) => {   
    return {
     type: 'ADD_USER',    
     text
    }   
};

export const fetchUser = () => {   
    return {
     type: 'FETCH_USER',    
    }   
};

export const removeUser = (text : string) => ({
    type: 'REMOVE_USER',    
    text
});

export const updateUser = (text : string) => ({
    type: 'UPDATE_USER',    
    text
});

export const refreshUser = (text : string) => ({
    type: 'REFRESH_USER',    
    text
});

export const setUserRole = (userIds : string[]) => ({
    type: 'SET_USER_ROLE',    
    userIds
});


