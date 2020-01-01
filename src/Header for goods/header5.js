// 网页上部
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import Zoumadeng from '../Zoumadeng/zoumadeng';

var Header5Css = require('./header5.css');

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/Secondpage">
      <div className={Header5Css.hhhh}>
        购物车
      </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/Thirdpage">
      <div className={Header5Css.hhhh}>
        我的收藏
      </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/Thirdpage">
      <div className={Header5Css.hhhh}>
        评价
      </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/Thirdpage">
      <div className={Header5Css.hhhh}>
        退款/售后
      </div>
      </Link>
    </Menu.Item>
    {/* <Menu.Item>
      <Link to="/Thirdpage">
      <div className={Header5Css.hhhh}>
        
      </div>
      </Link>
    </Menu.Item> */}
  </Menu>
);

export default class Header extends React.Component{
  render(){
    return(
      <div className={Header5Css.header}>
        <div className={Header5Css.logo}>
          <img src={require('../imgs/logo.jpg')} alt="" width="100%" height="80px"/>
        </div>

        <Link to="/goods"  className={Header5Css.header6}><div className={Header5Css.header7}>
          <h1 className={Header5Css.header6}>旅购</h1>          
        </div></Link>
        <div className={Header5Css.header4}>
          |
        </div>
        <div>
        <Link to="/goods" >
          <h3 className={Header5Css.header5}>连接全世界的美好</h3>
        </Link>
        </div>
        <div className={Header5Css.searchall}>
            <input type="text" className={Header5Css.search} placeholder="搜索发现你想要的"></input>
            </div>
            <div className={Header5Css.button}>
              <Button type="primary" icon="search" className={Header5Css.button1}>
                搜索
              </Button>
            </div>
        <Link to="/homepage" className={Header5Css.header1}><div>
          首页
        </div></Link>

        <div className={Header5Css.header4}>
          |
        </div>
        <div className={Header5Css.header2}><div>
          <Dropdown overlay={menu}>
            <div className="ant-dropdown-link" href="#">
              我的订单 <Icon type="down" />
            </div>
          </Dropdown>,
        </div></div>
 
        <div className={Header5Css.header4}>
          |
        </div>
        <Link to="/login"  className={Header5Css.header2}>
          <div>
          个人主页
        </div>
        </Link>
            {/* 除主页部分 */}

            {/* <div className={Header5Css.header3}>
                <Link to="/login">登陆</Link>
            </div> */}
            </div>
                    )
    }
}