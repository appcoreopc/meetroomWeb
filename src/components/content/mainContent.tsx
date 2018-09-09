import * as React from 'react';
import { Link } from 'react-router-dom';

class MainContent extends React.Component {


  public render() {
       
        return (                       

            <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">

                <div className="row x_title">
                  <div className="col-md-3">
                    <h3>Network Activities <small>Home Page</small></h3>
                  </div>
                  <div className="col-md-9">
                    <div id="reportrange" className="pull-right">
                      <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>               
                      <aside className="primary-aside">
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/users">Users</Link></li>               
                      </ul>
                    </aside>

                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12">                  
                    <main>                
                    </main>
                </div>
                <div>      
                      
                </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
                  
        );
    }
}

export default MainContent;
