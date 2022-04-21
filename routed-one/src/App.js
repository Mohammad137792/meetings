import React from "react";
import {Route, Switch} from  'react-router-dom';
import Layout from "./components/MainNavigator/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";
function App() {
  return <Layout>
    
    <Switch>
    <Route path='/' exact><AllMeetups/></Route>,
    <Route path='/NewMeetups'><NewMeetups/></Route>,
    <Route path='/Favourites'><Favourites/></Route>
    </Switch>
  </Layout>;
}

export default App;
