import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button} from 'antd';
import { connect } from 'react-redux';
import { setUserRole } from '../../actions/index';
import { fetchUser } from '../../actions/index';

interface IUserApplicationState { 

}

class MainContent extends React.Component<any, any> {
  
  constructor(props) { 
    super(props);
    this.state = {
      selectedRowKeys: [],
      loading : false, 
      data : []   
    };
  }     

  componentDidMount() {
    
  }

  componentWillUpdate() {
   
  }

  public render() {

   
    return (   
      
      <div className="container">        
      <div className="card card-container">
          
          <img id="profile-img" className="profile-img-card" src="images/avatar_2x.png" />
          
          <p id="profile-name" className="profile-name-card"></p>
         
          <form className="form-signin" action='http://localhost:3000/authenticate' method="post">
              <span id="reauth-email" className="reauth-email"></span>
              <input type="input" name="username" id="username" className="form-control" placeholder="Email address" required />
              <input type="password" name="password" id="password" className="form-control" placeholder="Password" required />
              <div id="remember" className="checkbox">
                  <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                  </label>
              </div>

              <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in </button>
      
         </form>
         
           <a href="#" className="forgot-password">
              Forgot the password?
          </a>
      </div>
  </div>      
      
    );
  }
}

const mapStateToProps = (state : any) => {
  console.log('mapping state property as we know it', state);
  
  if (state.users && state.users.users)
  {
    console.log('mapstate valid - 1', state.users.users);
    return {
      users: state.users.users,
      success : state.users.success
    };
  }
  return {
    users: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChanged: (name) => dispatch({ type: 'FETCH_USER', payload: name }),
    onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
