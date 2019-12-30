// 网页上部
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import Zoumadeng from '../Zoumadeng/zoumadeng';

var Header3Css = require('./header3.css');

export default class Header3 extends React.Component{
    render(){
        return(
        <div className={Header3Css.header}>
            <Link to="/homepage">
            <div className={Header3Css.logo}>
                <img src={require('../imgs/logo.jpg')} alt="" width="94%" height="120px"/>
            </div>
            </Link>
            <div>
                <div className={Header3Css.welcomeword}>
                {/* <a className={Header2Css.welcomeword1}>
                    |
                </a> */}
                <a className={Header3Css.welcomeword2}>
                    <b>用户登录</b>
                </a>
                </div>
            </div>
            </div>
        )
    }
}