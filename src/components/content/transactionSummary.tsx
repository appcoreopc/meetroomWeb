import * as React from 'react';

class TransactionSummary extends React.Component {

    public render() {

        var canvasStyle = {
           display : "inline-block",
           "verticalAlign" : "top",
           width: "94px", 
           height: "30px"            
          };
          
        var normalWidth = { 
            height : "160px"
        };

      

        var graphStyle = {
            background: "#fff", cursor: "pointer",
            padding: "5px 10px", border: "1px solid #ccc"
        };

       
        return (   

        <div className="row">
              <div className="col-md-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Transaction Summary <small>Weekly progress</small></h2>
                    <div className="filter">
                      <div id="reportrange" className="pull-right">
                        <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
                        <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div className="col-md-9 col-sm-12 col-xs-12">
                      <div className="demo-container" style={normalWidth}>
                        <div id="chart_plot_02" className="demo-placeholder" style={graphStyle}>
                        </div>
                      </div>
                      <div className="tiles">
                        <div className="col-md-4 tile">
                          <span>Total Sessions</span>
                          <h2>231,809</h2>
                          <span className="sparkline11 graph" style={normalWidth}>
                               <canvas width="200" height="60" style={canvasStyle}></canvas>
                          </span>
                        </div>
                        <div className="col-md-4 tile">
                          <span>Total Revenue</span>
                          <h2>$231,809</h2>
                          <span className="sparkline22 graph" style={normalWidth}>
                                <canvas width="200" height="60" style={canvasStyle}></canvas>
                          </span>
                        </div>
                        <div className="col-md-4 tile">
                          <span>Total Sessions</span>
                          <h2>231,809</h2>
                          <span className="sparkline11 graph" style={normalWidth}>
                                 <canvas width="200" height="60" style={canvasStyle}></canvas>
                          </span>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-3 col-sm-12 col-xs-12">
                      <div>
                        <div className="x_title">
                          <h2>Top Profiles</h2>
                          <ul className="nav navbar-right panel_toolbox">
                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                            </li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                              <ul className="dropdown-menu" role="menu">
                                <li><a href="#">Settings 1</a>
                                </li>
                                <li><a href="#">Settings 2</a>
                                </li>
                              </ul>
                            </li>
                            <li><a className="close-link"><i className="fa fa-close"/></a></li>
                          </ul>
                          <div className="clearfix"/>
                        </div>
                        <ul className="list-unstyled top_profiles scroll-view">
                          <li className="media event">
                            <a className="pull-left border-aero profile_thumb">
                              <i className="fa fa-user aero"/>
                            </a>
                            <div className="media-body">
                              <a className="title" href="#">Ms. Mary Jane</a>
                              <p><strong>$2300. </strong> Agent Avarage Sales </p>
                              <p> <small>12 Sales Today</small>
                              </p>
                            </div>
                          </li>
                          <li className="media event">
                            <a className="pull-left border-green profile_thumb">
                              <i className="fa fa-user green"/>
                            </a>
                            <div className="media-body">
                              <a className="title" href="#">Ms. Mary Jane</a>
                              <p><strong>$2300. </strong> Agent Avarage Sales </p>
                              <p> <small>12 Sales Today</small>
                              </p>
                            </div>
                          </li>
                          <li className="media event">
                            <a className="pull-left border-blue profile_thumb">
                              <i className="fa fa-user blue"/>
                            </a>
                            <div className="media-body">
                              <a className="title" href="#">Ms. Mary Jane</a>
                              <p><strong>$2300. </strong> Agent Avarage Sales </p>
                              <p> <small>12 Sales Today</small>
                              </p>
                            </div>
                          </li>
                          <li className="media event">
                            <a className="pull-left border-aero profile_thumb">
                              <i className="fa fa-user aero"/>
                            </a>
                            <div className="media-body">
                              <a className="title" href="#">Ms. Mary Jane</a>
                              <p><strong>$2300. </strong> Agent Avarage Sales </p>
                              <p> <small>12 Sales Today</small>
                              </p>
                            </div>
                          </li>
                          <li className="media event">
                            <a className="pull-left border-green profile_thumb">
                              <i className="fa fa-user green"/>
                            </a>
                            <div className="media-body">
                              <a className="title" href="#">Ms. Mary Jane</a>
                              <p><strong>$2300. </strong> Agent Avarage Sales </p>
                              <p> <small>12 Sales Today</small>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          
            
        );
    }
}


export default TransactionSummary;
