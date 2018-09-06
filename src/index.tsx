import * as React from "react";
import * as ReactDOM from "react-dom";

import AdminTab from './components/adminTab/adminTab';
import Footer from './components/footer/footer';
import TopNavigation from './components/topNavigation/topNavigation';
import TopTiles from './components/topNavigation/topTiles';


ReactDOM.render(
   
    <div>
         <AdminTab />
         <Footer />
         <TopNavigation />
         <TopTiles />         
     </div>   
   ,
    document.getElementById("example")
);
