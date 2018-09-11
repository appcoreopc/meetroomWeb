
class UserApi { 
 
    private getUserUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22f66588d55e4db88dabda8f03aa598c';     
    private fetchSettings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
        
    async getUsers(obj : any) {   
                
    debugger;

      console.log(obj);
      console.log('xxxx', this.getUserUrl);
      let result = await fetch(this.getUserUrl);
      let data = result.json();
      console.log('data');
      console.log(data);
      return data;  
    }
    
   async setUserRole(userId : number, roleId : number) {

    let result = await fetch(this.getUserUrl, this.fetchSettings);
    let data = result.json(); 
    return data; 
   }
}

export default UserApi;
