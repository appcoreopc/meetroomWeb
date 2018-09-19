import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button} from 'antd';
import { connect } from 'react-redux';
import { setUserRole } from '../../actions/index';
import { fetchUser } from '../../actions/index';
import { USER_FETCH_SUCCEEDED, FETCH_USER, ADD_USER, UPDATE_USER_ROLE,  UPDATE_USER_ROLE_SUCCEEDED } from '../../constants';

interface IUserApplicationState { 

}

class MainContent extends React.Component<any, any> {
  
  constructor(props) { 
    super(props);
    this.state = {
      selectedRowKeys: [],
      loading : false, 
      data : [],
      timestamp : 0 
    };
  }
    
  onSelectChange = (selectedRowKeys) => {
      this.setState({ selectedRowKeys });
  }
  
  setUserRole = (role: number) => {     

    const { selectedRowKeys } = this.state;    
    let userList = [];

    if (selectedRowKeys) {
      for (let index = 0; index < selectedRowKeys.length; index++) {
        const userId = this.state.data[index].id;
        userList.push(userId);        
      }

      if (userList && userList.length > 0)
         this.props.onUserRoleUpdate(userList, role);
    }     
  }

  componentDidMount() {
     this.props.onNameChanged();
  }

  componentDidUpdate()
  {
    let data = this.props.users;
  }
   
  public render() {

    let success = false;
    var self = this;

    if (this.props.users)
    {
      //let data  = this.props.users;
      if (this.props.success && this.props.success == true) {
     
        let usersData = this.props.users;        

        let stateTimestamp = this.state.timestamp; 
        let propTimestamp = this.props.timestamp; 

        if (stateTimestamp != propTimestamp)
        {
            usersData.json().then(function(jsonData) { 
            self.setState({
              data : jsonData,
              timestamp : propTimestamp           
            });        
          }); 
        }
      }  
    }           

    const { loading, selectedRowKeys } = this.state;  
    const hasSelected = selectedRowKeys.length > 0;
      
    const rowSelection = {
      selectedRowKeys : selectedRowKeys,
      onChange: this.onSelectChange
    };
    
    const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    }, {
      title: 'Role',
      dataIndex: 'role',
      render: (text, record) => {

        if (record.role == 1) 
          return <span>Admin</span>
        else 
          return <span>Normal user</span>        
      }
    }];
       
    return (   
      
      <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="dashboard_graph">
          
          <div className="row x_title">

          <div className="col-md-2">
          
          </div>
          <div className="col-md-4">
          <h3> <small>  Manage user - configure user profile to Adminisrator or normal user. </small></h3>
          </div>
         
          <div className="col-md-6">          
          <div id="reportrange" className="pull-right">
          <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
          <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
          </div>
          </div>

        </div>      
      
      <div className="row x_title">
          <div className="col-md-2 col-sm-12 col-xs-12">                
          </div>
          
          <div className="col-md-10 col-sm-12 col-xs-12">
          <div> 

            <Button type="primary" onClick={() => {
              this.setUserRole(1);
            }} disabled={!hasSelected} loading={loading}> Set to Admin </Button>
            
            
             <Button type="primary" onClick={() => {
              this.setUserRole(0);              
            }} disabled={!hasSelected} loading={loading}> Set Normal User </Button>
            <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ``}
            </span>
          </div>
          
          <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                
          </div>
      </div>      
      
      <div className="clearfix">
      </div>
      
      </div>
      </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state : any) => {
   
  if (state.users && state.users.users)
  {    
    return {
      users: state.users.users,
      success : state.users.success,
      timestamp : state.users.timestamp
    };
  }
  return {
    users: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChanged: (name) => dispatch({ type: 'FETCH_USER', payload: name }),
    onUserRoleUpdate: (usersId, role) => dispatch({ type: 'UPDATE_USER_ROLE', usersId: usersId, role : role }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
