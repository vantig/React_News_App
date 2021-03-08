import React from 'react';
import  { Switch, Route} from "react-router-dom";


import PostsPage from "./components/user/Posts.Page";
import Post from "./components/user/Post";
import SignUp from "./components/user/SignUp";
import Login from "./components/user/Login";
import Layout from "./shared/Layout";

const App = () => {
    return (
        <layout>
        <Switch>
            <Layout>
                <Route exact path='/' component={PostsPage}/>
                <Route path='/news/:id' component={Post}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
            </Layout>
        </Switch>
        </layout>
    );
}

export default App;
