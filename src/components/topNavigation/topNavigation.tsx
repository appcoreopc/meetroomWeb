import * as React from 'react';
import { Spin } from 'antd';
import { FETCH_ADMIN_INFO, ON_BUSY, ON_NOT_BUSY } from '../../constants';
import { connect } from 'react-redux';

class TopNavigation extends React.Component<any, any> {
  
  constructor(props) {
    
    super(props);   
    
    this.state = {    
      username : '',
      timestamp : 0 ,
      avatarUrl : ''
    };  
  }
  
  componentWillMount() { 
    
    this.setState(
      {
        loading : false
      }
    );
  }
  
  public render() {
    
    let self = this;
    let username = '';
    let avatarUrl = '';
    
        
    let loading = this.state.loading;

    let userObject = this.props.sysadmin.sysadmin;

    if (userObject)
    {
      username = userObject[0].username;
      avatarUrl = userObject.avatarUrl;
      console.log('final user', username);
    }


   
    
    return (   
      
      <div className="top_nav">
      
      <Spin className="center-screen" spinning={loading} />
      
      <div className="nav_menu">
      <nav>
      <div className="nav toggle">
      <a id="menu_toggle"><i className="fa fa-bars"></i></a>
      </div>
      
      <ul className="nav navbar-nav navbar-right">
      <li className="">
      <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      <img  src={avatarUrl} alt="" />Hi, {username}
      <span className=" fa fa-angle-down"></span>
      </a>                  
      </li>
      
      <li role="presentation" className="dropdown">
      <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
      <i className="fa fa-envelope-o"></i>
      <span className="badge bg-green">6</span>
      </a>
      <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
      
      </ul>
      </li>
      </ul>
      </nav>
      </div>
      </div>          
    );
  }
}

const mapStateToProps = (state : any) => {
  return {
    sysadmin : state.getdatareducer,     
    //timestamp : state.timestamp,
    //success : state.success
  };
}

function mapDispatchToProps(dispatch) {        
  return {  
    
    onUserPanelLoad : (name) => dispatch({ type: FETCH_ADMIN_INFO, userinfo : name }),
    onBusy : () => dispatch({ type: ON_BUSY}),
    onNotBusy : () => dispatch({ type: ON_NOT_BUSY }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TopNavigation);

