import * as React from "react";
import * as ReactDOM from "react-dom";

import AdminTab from './components/adminTab/adminTab';
import Footer from './components/footer/footer';
import TopNavigation from './components/topNavigation/topNavigation';
import TopTiles from './components/topNavigation/topTiles';
import MainContent from './components/content/mainContent';
import TransactionSummary from './components/content/transactionSummary';


ReactDOM.render(
   
    <div>
         <AdminTab />
         <Footer />
         <TopNavigation />
         <TopTiles />    
         <MainContent />  
         <TransactionSummary />
            
     </div>   
   ,
    document.getElementById("example")
);
