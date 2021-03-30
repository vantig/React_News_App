import React from 'react';
import  { Switch, Route} from "react-router-dom";


import FoodList from "./components/user/FoodList";
import Post from "./components/user/Post";
import SignUp from "./components/user/SignUp";
import Login from "./components/user/Login";
import Layout from "./shared/Layout";

const App = () => {
    return (
        <layout>
        <Switch>
            <Layout>
                <Route exact path='/' component={FoodList}/>
                <Route path='/news/:id' component={Post}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
            </Layout>
        </Switch>
        </layout>
    );
}

export default App;
