import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import {Route,NavLink,Switch, Redirect} from 'react-router-dom';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const  AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})


class Blog extends Component {
 
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts/" >Home</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: '/new-post',
                                hash:"#submit"
                            }} >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header> 

                {/*<Route path="/"  exact render={()=> <h1>Home</h1>}/>
                <Route path="/"  render={()=> <h1>Home 2</h1>}/>*/}

                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />

                    <Route render={()=> <h1>404 page (Not Found)</h1>} />

                    {/*<Redirect from="/" to="/posts" />*/}
                   
                </Switch>
                     
               
            </div>
        );
    }
}

export default Blog;