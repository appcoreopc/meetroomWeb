import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button} from 'antd';

class MainContent extends React.Component<any, any> {
  //selectedRowKeys = [];
  loading : boolean  = false; 

  constructor(props) { 
    super(props);
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column 
      loading : false    
    };
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  start = () => { 
    console.log('clicked');
  }

  public render() {

    const { loading, selectedRowKeys } = this.state;    

    console.log('rendering rendering...');

    const hasSelected = selectedRowKeys.length > 0;

    console.log(!hasSelected);
    
    const rowSelection = {
      selectedRowKeys : selectedRowKeys,
      onChange: this.onSelectChange
    };

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
           
    return (   
         
       <div className="row">
       <div className="col-md-12 col-sm-12 col-xs-12">
         <div className="dashboard_graph">

           <div className="row x_title">
             <div className="col-md-6">
               <h3>Network Activities <small>Graph title sub-title</small></h3>
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
            
            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}> Set to Admin </Button>
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

export default MainContent;
