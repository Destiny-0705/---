// 网页上部
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import Zoumadeng from '../Zoumadeng/zoumadeng';

var HeaderCss = require('./header.css');

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/Secondpage">
      <div className={HeaderCss.hhhh}>
        攻略
      </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/Thirdpage">
      <div className={HeaderCss.hhhh}>
        游记
      </div>
      </Link>
    </Menu.Item>
  </Menu>
);

export default class Header extends React.Component{
  render(){
    return(
      <div className={HeaderCss.header}>
        <div className={HeaderCss.logo}>
          <img src={require('../imgs/logo.jpg')} alt="" width="100%" height="80px"/>
        </div>
        <Link to="/homepage" className={HeaderCss.header1}><div>
          首页
        </div></Link>
        <div className={HeaderCss.header4}>
          |
        </div>
        <div className={HeaderCss.header2}><div>
          <Dropdown overlay={menu}>
            <div className="ant-dropdown-link" href="#">
              去旅游 <Icon type="down" />
            </div>
          </Dropdown>,
        </div></div>
        <div className={HeaderCss.header4}>
          |
        </div>
        <Link to="/goods"  className={HeaderCss.header2}><div>
          旅购
        </div></Link>
        <div className={HeaderCss.header4}>
          |
        </div>
        <Link to="/login"  className={HeaderCss.header2}>
          <div>
          个人主页
        </div>
        </Link>
            {/* 除主页部分 */}
            <div className={HeaderCss.searchall}>
            <input type="text" className={HeaderCss.search} placeholder="搜目的地/攻略/心得/路线/酒店"></input>
            </div>
            <div className={HeaderCss.button}>
              <Button type="primary" icon="search" className={HeaderCss.button1}>
                搜索
              </Button>
            </div>
            {/* <div className={HeaderCss.header3}>
                <Link to="/login">登陆</Link>
            </div> */}
            </div>
                    )
    }
}