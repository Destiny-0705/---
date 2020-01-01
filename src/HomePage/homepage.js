// 主页
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import background from '../imgs/巴黎/bali1.jpg';
import Header4 from '../Header for homepage/header4';
import Zoumadeng2 from '../zoumadeng for homepage/zoumadeng2';
import { Button } from 'antd';





var HomePageCss = require('./homepage.css')
var img1 = require('../imgs/悉尼/timg.jpg')

export default class HomePage extends React.Component{
    render(){
        return(
            <div className={HomePageCss.homepage1}>
                    <div className={HomePageCss.header}><Header4/></div>
                    <div className={HomePageCss.background}>
                    <Zoumadeng2 className={HomePageCss.zoumadeng}></Zoumadeng2>
                    </div>
                    <div className={HomePageCss.content}>
                        <div className={HomePageCss.content2}>
                            <div className={HomePageCss.search}>
                                <input type="text" className={HomePageCss.search1} placeholder="搜目的地/攻略/心得/路线/酒店"></input>
                            </div>
                            <Button type="primary" icon="search" className={HomePageCss.button}>
                                搜索
                            </Button>
                        </div>
                    </div>
                    <div className={HomePageCss.Footer}><Footer/></div>
            </div>
        )
    }
}
