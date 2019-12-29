import React from 'react';
import {Button, Input, Row, Col } from 'antd';
import {Link} from 'react-router-dom'
import Header3 from '../Header for login/header3';

var img1 =require('../imgs/夜景3.jpg')
var login = require('./login.css')

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <div className={login.header}><Header3/></div>
                <hr className={login.underline}></hr>
                <div className={login.content}>
                        <div className={login.content2}>
                                <div>
                                    {/* <div className={login.login01}>用户登录</div> */}
                                    <div className={login.login02}>
                                        <Input placeholder="手机号/会员名/邮箱" className={login.login021}></Input>
                                    </div>
                                    <div className={login.login03}>
                                        <Input placeholder="密码" className={login.login031}></Input>
                                    </div>
                                </div>
                                <div className={login.d}>
                                    <Link to="/personalpage"><Button type="primary" className={login.loginbutton}>
                                        登录                                 
                                    </Button>
                                    </Link>
                                    <br></br>
                                    <div className={login.register}>
                                        新用户, <Link to="/register" className={login.register01}><a>立即注册 ></a></Link>
                                    </div>
                                </div> 
                        </div>

                </div>
            </div>
        )
    }

}
