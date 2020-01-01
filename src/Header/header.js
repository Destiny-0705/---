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
          <img src={require('../imgs/logo.jpg')} alt="" width="100%" height="40px"/>
        </div>
        <Link to="/homepage" className={HeaderCss.header1}><a >
          首页
        </a></Link>
        <a className={HeaderCss.header4}>
          |
        </a>
        <div className={HeaderCss.header2}><a>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              旅行家 <Icon type="down" />
            </a>
          </Dropdown>,
        </a></div>
        <a className={HeaderCss.header4}>
          |
        </a>
        <Link to="/thirdpage"  className={HeaderCss.header2}><a>
          旅行记录
        </a></Link>
        <a className={HeaderCss.header4}>
          |
        </a>
        <Link to="/goods"  className={HeaderCss.header2}>
          <a>

        </a>
        </Link>
            {/* 除主页部分 */}
            <div className={HeaderCss.searchall}>
            <input type="text" className={HeaderCss.search} placeholder="搜目的地/攻略/心得/路线/酒店"></input>
            </div>
            <div className={HeaderCss.button}>
              <Button type="primary" icon="search">
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