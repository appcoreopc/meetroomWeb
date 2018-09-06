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


const store = createStore(rootReducer) 

ReactDOM.render(
       
    <Provider store={store}>    
    <div>
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
