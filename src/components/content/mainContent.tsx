import * as React from 'react';
import { Link } from 'react-router-dom';

class MainContent extends React.Component {


  public render() {

        // let divWidthStyle:any = {           
        //     width: "76%"
        //   };
        
        // let divBackgroundStyle: any = {background: "#fff",
        //  cursor: "pointer", padding: "5px 10px",
        //   border: "1px solid #ccc"
        // }

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

           <div className="col-md-9 col-sm-9 col-xs-12">
             <div id="chart_plot_01" className="demo-placeholder"></div>
           </div>
           <div className="col-md-3 col-sm-3 col-xs-12 bg-white">
             <div className="x_title">
               <h2>Top Campaign Performance</h2>
               <div className="clearfix"></div>
             </div>

             <div className="col-md-12 col-sm-12 col-xs-6">
               <div>
                 <p>Facebook Campaign</p>
                 <div className="">
                   <div className="progress progress_sm">
                     <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="80"></div>
                   </div>
                 </div>
               </div>
               <div>
                 <p>Twitter Campaign</p>
                 <div className="">
                   <div className="progress progress_sm">
                     <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-md-12 col-sm-12 col-xs-6">
               <div>
                 <p>Conventional Media</p>
                 <div className="">
                   <div className="progress progress_sm">
                     <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="40"></div>
                   </div>
                 </div>
               </div>
               <div>
                 <p>Bill boards</p>

                 <aside className="primary-aside">
                 <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">about</Link></li>
                   <li><Link to="/members">members</Link></li>
                   <li><Link to="/test">test</Link></li>
                 </ul>
               </aside>
               
                 <div className="">
                   <div className="progress progress_sm">
                     <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                   </div>
                 </div>
               </div>
             </div>

           </div>

           <div>
  
           <header className="primary-header"></header>
       
         
           <main>
             <div> content here  </div>      
           </main>
       
         </div>



           <div className="clearfix"></div>



         </div>
       </div>

       </div>
            
        );
    }
}

export default MainContent;
