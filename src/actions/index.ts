export const addUser = (text : string) => {

    console.log('dispatching adduser');
    return {
    type: 'ADD_USER',    
    text
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
