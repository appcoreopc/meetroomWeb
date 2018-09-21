import * as React from 'react';
import { Spin } from 'antd';
import { FETCH_ADMIN_INFO, ON_BUSY, ON_NOT_BUSY } from '../../constants';
import { connect } from 'react-redux';

class TopNavigation extends React.Component<any, any> {

   constructor(props) {
    super(props);   
   }

  componentWillMount() { 

    this.setState(
      {
        loading : false
      }
    );
  }

    public render() {

      let loading = this.state.loading;
      if (!loading)
         loading = false; 

      let username = this.props.sysadmin.username; 
      if (!username) 
          username = '';

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
                      <img src="images/img.jpg" alt="" />{username}
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
  
  console.log('top navigations state - ', state)
 
  if (state && state.sysadmin)
  {    
    return {
      sysadmin : state.sysadmin,    
      timestamp : state.sysadmin.timestamp
    };
  }
  return state;   
}

function mapDispatchToProps(dispatch) {        
  return {  

    onUserPanelLoad : (name) => dispatch({ type: FETCH_ADMIN_INFO, userinfo : name }),
    onBusy : () => dispatch({ type: ON_BUSY}),
    onNotBusy : () => dispatch({ type: ON_NOT_BUSY }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TopNavigation);
