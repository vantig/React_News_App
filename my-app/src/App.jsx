import React from 'react';
import  { Switch, Route} from "react-router-dom";


import FoodList from "./components/user/FoodList";
import Layout from "./shared/Layout";

const App = () => {
    return (
        <layout>
        <Switch>
            <Layout>
                <Route exact path='/' component={FoodList}/>
            </Layout>
        </Switch>
        </layout>
    );
}

export default App;
