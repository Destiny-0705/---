// 网页上部
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import Zoumadeng from '../Zoumadeng/zoumadeng';



var HeaderCss = require('./header.css');


export default class Header extends React.Component{
  render(){
    return(
      <div className={HeaderCss.header}>
        <div className={HeaderCss.logo}>
          <img src={require('../imgs/logo.jpg')} alt="" width="94%" height="68px"/>
        </div>
        <Link to="/homepage" className={HeaderCss.header1}><a >
          首页
        </a></Link>
        <a className={HeaderCss.header4}>
          |
        </a>
        <Link to="/secondpage"  className={HeaderCss.header2}><a>
          旅行攻略者
        </a></Link>
        <a className={HeaderCss.header4}>
          |
        </a>
        <Link to="/thirdpage"  className={HeaderCss.header2}><a>
          旅行记录家
        </a></Link>
            {/* 除主页部分 */}
            <div className={HeaderCss.searchall}>
            <input type="text" className={HeaderCss.search} placeholder="搜目的地/攻略/心得/路线/酒店"></input>
            </div>
            <div className={HeaderCss.button}>
              <Button type="primary" icon="search">
                搜索
              </Button>
            </div>
            <div className={HeaderCss.header3}>
                <Link to="/login">登陆</Link>
            </div>
            </div>
                    )
    }
}