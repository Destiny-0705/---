import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Pagination } from 'antd';

var ThirdPageCss = require('./thirdpage.css');

export default class ThirdPage extends React.Component{
    render(){
        return(
            <div>
                <div className={ThirdPageCss.header}><Header/></div>
                <div>
                <div className={ThirdPageCss.picture3}>
                <div className={ThirdPageCss.picture}>
                    <img src={require('../imgs/巴黎/bali3.jpg')} alt="" width="100%" height="93%"/>
                </div>
                <div className={ThirdPageCss.picture2}>
                    巴黎 · 凯旋门
                </div>
                </div>
                <div className={ThirdPageCss.top1}>
                    <div className={ThirdPageCss.top2}>
                        旅游记录家
                    </div>
                    <div className={ThirdPageCss.top3}>
                        ·
                    </div>
                    <div className={ThirdPageCss.top4}>
                    人生就像一场旅行，不必在乎目的地，在乎的是沿途的风景以及看风景的心情，让心灵去旅行!
                    </div>
                </div>
                <div className={ThirdPageCss.top5}>
                    
                </div>
                <div className={ThirdPageCss.passageall}>
                    <a className={ThirdPageCss.passage} href="http://www.mafengwo.cn/i/12473698.html">
                    <div className={ThirdPageCss.passageimg}>
                        <img src={require('../imgs/西雅图/xiyatu1.jpg')} alt="" width="100%" height="93%"/>
                    </div>
                    <div>
                    <div className={ThirdPageCss.passageword1}>
                        西雅图
                    </div>
                    <div className={ThirdPageCss.passageword2}>
                    ___________________________
                    <br></br> 
                        我是北京，
                        你是西雅图
                    </div>
                    </div>
                    </a>
                </div>
                <div className={ThirdPageCss.passageall}>
                    <a className={ThirdPageCss.passage} href="http://www.mafengwo.cn/i/12059286.html">
                    <div className={ThirdPageCss.passageimg}>
                        <img src={require('../imgs/西雅图/niuyue1.jpg')} alt="" width="100%" height="93%"/>
                    </div>
                    <div>
                    <div className={ThirdPageCss.passageword1}>
                        纽约
                    </div>
                    <div className={ThirdPageCss.passageword2}>
                    ___________________________
                    <br></br> 
                    New Yorker温暖真实的人生片刻
                    </div>
                    </div>
                    </a>
                </div>
                <div className={ThirdPageCss.passageall}>
                    <a className={ThirdPageCss.passage} href="http://www.mafengwo.cn/i/13834650.html">
                    <div className={ThirdPageCss.passageimg}>
                        <img src={require('../imgs/柏林/bolin1.jpg')} alt="" width="100%" height="93%"/>
                    </div>
                    <div>
                    <div className={ThirdPageCss.passageword1}>
                        柏林
                    </div>
                    <div className={ThirdPageCss.passageword2}>
                    ___________________________
                    <br></br> 
                    朴素是这个城市的主色调
                    </div>
                    </div>
                    </a>
                </div>
                <div className={ThirdPageCss.passageall}>
                    <a className={ThirdPageCss.passage} href="http://www.mafengwo.cn/i/13495516.html">
                    <div className={ThirdPageCss.passageimg}>
                        <img src={require('../imgs/威尼斯/weinisi1.jpg')} alt="" width="100%" height="93%"/>
                    </div>
                    <div>
                    <div className={ThirdPageCss.passageword1}>
                        威尼斯
                    </div>
                    <div className={ThirdPageCss.passageword2}>
                    ___________________________
                    <br></br> 
                    亚得里亚海的王冠
                    </div>
                    </div>
                    </a>
                </div>
                <div className={ThirdPageCss.pagenumber}><Pagination defaultCurrent={2} total={8} /></div>
                </div>
                <div className={ThirdPageCss.footer}><Footer/></div>
            </div>
        )
    }
}