// 网页上部
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import Zoumadeng from '../Zoumadeng/zoumadeng';

var Header2Css = require('./header2.css');

export default class Header2 extends React.Component{
    render(){
        return(
        <div className={Header2Css.header}>
            <div className={Header2Css.logo}>
                <img src={require('../imgs/logo.jpg')} alt="" width="94%" height="120px"/>
            </div>
            <div>
                <div className={Header2Css.welcomeword}>
                {/* <a className={Header2Css.welcomeword1}>
                    |
                </a> */}
                <a className={Header2Css.welcomeword2}>
                    <b>注册账号</b>
                </a>
                </div>
            </div>
            </div>
        )
    }
}