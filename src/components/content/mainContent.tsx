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
      loading : false    
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
    debugger;
    this.props.onNameChanged();
  }

  componentWillUpdate() {
    console.log(this.state);
  }

  componentDidUpdate()
  {

    let data = this.props.users;

    console.log('here we componentDidUpdate');

    console.log(this.state);

    console.log(this.props);
  }
   
  public render() {

    let data = this.props.users;

    console.log('here we goooooo');

    console.log(this.state);

    console.log(this.props);

    const { loading, selectedRowKeys } = this.state;
    console.log('rendering rendering...');    
    const hasSelected = selectedRowKeys.length > 0;
    console.log(!hasSelected);
    
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
    }];
    
    // data = [];
    // for (let i = 0; i < 46; i++) {
    //   data.push({
    //     key: i,
    //     name: `Edward King ${i}`,
    //     age: 32,
    //     address: `London, Park Lane no. ${i}`,
    //   });
    // }
    
    return (   
      
      <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="dashboard_graph">
      
      <div className="row x_title">
      <div className="col-md-6">
      <h3>Network Activities <small>Graph title sub-title - data data  {this.props.success}</small></h3>
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
      
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      
      
      </div>
      </div>
      
      <div className="clearfix"></div>
      
      </div>
      </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state : any) =>{
  console.log('mapstate', state);
  return ({
    users: state.users,
    success : state.success
  })
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChanged: (name) => dispatch({ type: 'FETCH_USER', payload: name }),
    onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
