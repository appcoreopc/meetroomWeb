
import * as React from "react";
import * as ReactDOM from "react-dom";

import AdminTab from './components/adminTab/adminTab';
import Footer from './components/footer/footer';
import TopNavigation from './components/topNavigation/topNavigation';
import TopTiles from './components/topNavigation/topTiles';
import TransactionSummary from './components/content/transactionSummary';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { Route, HashRouter, Switch } from 'react-router-dom';
import MainContent from './components/content/mainContent';

class App extends React.Component {

    public render() {  
         
        return (   
            <div>  
                <AdminTab />
                <Footer />
                <TopNavigation />
                <TopTiles /> 
            </div>);
    }
}

export default App;