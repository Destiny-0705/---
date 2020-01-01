// 网页上部
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import Zoumadeng from '../Zoumadeng/zoumadeng';

var Header4Css = require('./header4.css');

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/Secondpage">
      <div className={Header4Css.hhhh}>
        旅游攻略
      </div>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/Thirdpage">
      <div className={Header4Css.hhhh}>
        旅游记录
      </div>
      </Link>
    </Menu.Item>
  </Menu>
);

export default class Header4 extends React.Component{
  render(){
    return(
      <div className={Header4Css.header}>
        <div className={Header4Css.logo}>
          <img src={require('../imgs/logo.jpg')} alt="" width="94%" height="109px"/>
        </div>
        <Link to="/homepage" className={Header4Css.header1}><div>
          首页
        </div></Link>
        <div className={Header4Css.header4}>
          |
        </div>
        <div className={Header4Css.header2}><div>
          <Dropdown overlay={menu}>
            <div className="ant-dropdown-link" href="#">
              去旅游 <Icon type="down" />
            </div>
          </Dropdown>
        </div></div>
        <div className={Header4Css.header4}>
          |
        </div>
        <Link to="/goods"  className={Header4Css.header2}><div>
          旅购
        </div></Link>
        <div className={Header4Css.header4}>
          |
        </div>
        <Link to="/login"  className={Header4Css.header2}>
          <div>
            个人主页
          </div>
        </Link>
            {/* 除主页部分 */}
            {/* <div className={Header4Css.searchall}>
            <input type="text" className={Header4Css.search} placeholder="搜目的地/攻略/心得/路线/酒店"></input>
            </div> */}
            {/* <div className={Header4Css.button}>
              <Button type="primary" icon="search">
                搜索
              </Button>
            </div> */}
            {/* <div className={HeaderCss.header3}>
                <Link to="/login">登陆</Link>
            </div> */}
            </div>
                    )
    }
}