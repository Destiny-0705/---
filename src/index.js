import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/login'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Register from'./Register/register';
import PersonalPage from './PersonalPage/personalpage';
import HomePage from './HomePage/homepage';
import SecondPage from './SecondPage/secondpage';
import { omit } from 'rc-mentions/lib/util';
import ThirdPage from './ThirdPage/thirdpage';
import About from './About/about';
import Content1 from './page1-content/content1';
import Header2 from './Header for register/header2'
import Header3 from './Header for login/header3';
class LoginPage extends React.Component{
    render(){
        return(
            <div>
                
                <BrowserRouter basename="best match">
                     <Switch>
                        <Route path="/login"  component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/personalpage" component={PersonalPage}></Route>
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/secondpage" component={SecondPage}></Route>
                        <Route path="/thirdpage" component={ThirdPage}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/content1" component={Content1}></Route>
                        <Route path="/header2" component={Header2}></Route>  
                        <Route path="/header3" component={Header3}></Route>                 
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<LoginPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
