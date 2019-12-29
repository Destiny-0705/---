// 旅游心得界面/旅游攻略
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Menu, Dropdown, Icon } from 'antd';
import { Pagination } from 'antd';

var SecondPageCss = require('./secondpage.css')

export default class SecondPage extends React.Component{
    render(){
        return(
            <div className={SecondPageCss.secondpage1}>
                <div className={SecondPageCss.header}><Header/></div>
                <div className={SecondPageCss.picture3}>
                <div className={SecondPageCss.picture}>
                    <img src={require('../imgs/日本/riben2.jpg')} alt="" width="100%" height="93%"/>
                </div>
                <div className={SecondPageCss.picture2}>
                    日本 · 富士山
                </div>
                </div>
                <div className={SecondPageCss.top1}>
                    <div className={SecondPageCss.top2}>
                        旅游攻略者
                    </div>
                    <div className={SecondPageCss.top3}>
                        ·
                    </div>
                    <div className={SecondPageCss.top4}>
                    很多事情就像是旅行一样，当你做出决定并迈出第一步的时候，最困难的那部分其实就已经完成了。
                    </div>
                </div>
                <div className={SecondPageCss.top5}>

                </div>
                <div className={SecondPageCss.tog}>
                <div className={SecondPageCss.left1}>
                    <div className={SecondPageCss.left11}>
                        <a className={SecondPageCss.left1101}>热门攻略推荐</a>
                    </div>
                    <div className={SecondPageCss.top6}>

                    </div>
                    <a className={SecondPageCss.left20}>
                    <div className={SecondPageCss.left21}>
                        <img src={require('../imgs/伦敦/lundun4.jpg')} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={SecondPageCss.left22}>
                        伦敦丨初游伦敦必访景点推荐
                    </div>
                    </a>
                    <div className={SecondPageCss.top6}>

                    </div>
                    <a className={SecondPageCss.left20}>
                    <div className={SecondPageCss.left21}>
                        <img src={require('../imgs/巴黎/bali2.jpg')} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={SecondPageCss.left22}>
                        巴黎丨哪些地方适合登高观赏巴黎全景？
                    </div>
                    </a>
                    <div className={SecondPageCss.top6}>
                    </div>
                    <a className={SecondPageCss.left20}>
                    <div className={SecondPageCss.left21}>
                        <img src={require('../imgs/日本/riben3.jpg')} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={SecondPageCss.left22}>
                        东京丨除了东京塔，不可错过的还有胶囊旅馆！
                    </div>
                    </a>
                    <div className={SecondPageCss.top6}>

                    </div>
                    <a className={SecondPageCss.left20}>
                    <div className={SecondPageCss.left21}>
                        <img src={require('../imgs/悉尼/xini3.jpg')} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={SecondPageCss.left22}>
                        悉尼丨用8顿大餐打造一场美馔之旅
                    </div>
                    </a>
                </div>
                {/* <div className={SecondPageCss.mid}>
                    
                </div> */}
                <div className={SecondPageCss.right1}>
                    <a className={SecondPageCss.left20}>
                    <div className={SecondPageCss.left21}>
                        <img src={require('../imgs/成都/chengdu1.jpg')} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={SecondPageCss.left23}>
                        成都丨天府之国小众打卡圣地推荐
                    </div>
                    </a>
                    <div className={SecondPageCss.top6}>

                    </div>
                    <a className={SecondPageCss.left20}>
                    <div className={SecondPageCss.left21}>
                        <img src={require('../imgs/伦敦/lundun3.jpg')} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={SecondPageCss.left23}>
                        伦敦丨初游伦敦必访推荐
                    </div>
                    </a>
                    <div className={SecondPageCss.top6}>
                    </div>
                    <a className={SecondPageCss.left20}>
                    <div className={SecondPageCss.left21}>
                        <img src={require('../imgs/日本/riben1.jpg')} alt="" width="100%" height="100%"/>
                    </div>
                    <div className={SecondPageCss.left23}>
                        日本丨赏樱攻略
                    </div>
                    </a>
                </div>
                <div className={SecondPageCss.pagenumber}><Pagination defaultCurrent={1} total={8} /></div>
                </div>
                <div className={SecondPageCss.footer}><Footer/></div>
            </div>
        )
    }
}