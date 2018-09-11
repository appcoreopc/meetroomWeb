import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button} from 'antd';

class MainContent extends React.Component {

    
  public render() {

    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },     
      { title: 'Role', dataIndex: 'role', key: 'role' },
      { title: 'Is Admin', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Set Admin</a> },
    ];

    const data = [
      { key: 1, name: 'John Brown', role: 'user', address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
      { key: 2, name: 'Jim Green', role: 'user', address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
      { key: 3, name: 'Joe Black', role: 'user', address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
    ];

        
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
            <div> <Button type="primary">Reload</Button></div>

              <Table columns={columns} dataSource={data}   />

                    
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
