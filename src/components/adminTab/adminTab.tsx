import * as React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/index';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

class AdminTab extends React.Component {
    
    public render() {
        
              
        return (   
            
            <div className="col-md-3 left_col">
            
            <div className="left_col scroll-view">
            <div className="navbar nav_title" style={{border: 0}}>
            <a href="index.html" className="site_title"><i className="fa fa-paw"/> <span>Gentelella Alela!</span></a>
            </div>
            
            <div className="clearfix"/>
                    
            
            <div className="profile clearfix">
            <div className="profile_pic">
            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
            </div>
            <div className="profile_info">
            <span>Welcome111,</span>
            <h2>John Doe11</h2> 
            
            </div>
            </div>        
            
            <br />          
            
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
            <h3>General</h3>
            <ul className="nav side-menu">
            <li>
            <a>
            <i className="fa fa-home"/> <Link to="/">Home</Link> <span className="fa fa-chevron-down"/>
            
            </a>
            <ul className="nav child_menu">
            <li><a href="index.html">Dashboard</a></li>
            <li><a href="index2.html">Dashboard2</a></li>
            <li><a href="index3.html">Dashboard3</a></li>
            </ul>
            </li>
            <li>            
            
            <a><i className="fa fa-edit"/> <Link to="/users">Users</Link> <span className="fa fa-chevron-down"/>
            </a>
            <ul className="nav child_menu">
            <li><a href="form.html">General Form</a></li>
            <li><a href="form_advanced.html">Advanced Components</a></li>
            <li><a href="form_validation.html">Form Validation</a></li>
            <li><a href="form_wizards.html">Form Wizard</a></li>
            <li><a href="form_upload.html">Form Upload</a></li>
            <li><a href="form_buttons.html">Form Buttons</a></li>
            
            
            <li>Form Buttons </li>
            
            </ul>
            </li>
                     

            </ul>
            </div>
            
            
            <div className="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
            <span className="glyphicon glyphicon-cog" aria-hidden="true"/>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"/>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"/>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
            <span className="glyphicon glyphicon-off" aria-hidden="true"/>
            </a>
            </div>
            
            
            </div>
            </div>
            
            </div>
            
            
        );
    }
}

export default connect()(AdminTab);
