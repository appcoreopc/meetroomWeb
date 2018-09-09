import * as React from "react";
import * as ReactDOM from "react-dom";

import AdminTab from './components/adminTab/adminTab';
import Footer from './components/footer/footer';
import TopNavigation from './components/topNavigation/topNavigation';
import TopTiles from './components/topNavigation/topTiles';
import MainContent from './components/content/mainContent';
import TransactionSummary from './components/content/transactionSummary';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { Route, HashRouter, Switch } from 'react-router-dom';
import {MembersPage} from './components/user/member';
import {About } from './components/user/about';
import {Main} from './components/user/main';
const store = createStore(rootReducer) 

ReactDOM.render(
       
    <Provider store={store}> 
        
    <div>

      <HashRouter>
            <div className="container-fluid">
            <Route component={Main} />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/members" component={MembersPage} />
            </Switch>
            </div>
        </HashRouter>


        <AdminTab />
        <Footer />
        <TopNavigation />
        <TopTiles />    
        <MainContent />  
        <TransactionSummary />    
    </div>   
    </Provider>,
    document.getElementById("root")
);
