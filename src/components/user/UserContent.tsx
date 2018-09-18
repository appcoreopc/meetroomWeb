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
      data : [],
      timestamp : 0 
    };
  }
    
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed:', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  
  setAdmin = () => {     
    const { selectedRowKeys } = this.state;       
    this.props.dispatch(setUserRole(selectedRowKeys))
    console.log('clicked');    
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
            // data = jsonData;
            self.setState({
              data : jsonData,
              timestamp : propTimestamp           
            });

          //console.log(data);
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
    
    const columns = [{
      title: 'Id',
      dataIndex: 'Id',
    }, {
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
      <div className="col-md-6">
      <h3>Network Activities <small>Graph title sub-title - data data -- {success}</small></h3>
      </div>
      <div className="col-md-6">
      
      <div id="reportrange" className="pull-right">
      <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
      <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
      </div>
      </div>
      </div>      
      
      <div className="row x_title">
      <div className="col-md-6">
            
      </div>
      
      <div className="col-md-6">
      <div> 
      
      <Button type="primary" onClick={this.setAdmin} disabled={!hasSelected} loading={loading}> Set to Admin </Button>
      <span style={{ marginLeft: 8 }}>
      {hasSelected ? 'Selected ${selectedRowKeys.length} items' : ''}
      </span>
      </div>
      
      <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
            
      </div>
      </div>
      
      <div className="clearfix"></div>
      
      </div>
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
    onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
