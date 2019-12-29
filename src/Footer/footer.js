// 网站底部
import React from 'react';
import {Link} from 'react-router-dom'

var FooterCss = require('./footer.css')

export default class Footer extends React.Component{
    render(){
        return(
            <div className={FooterCss.footer}>
                <div className={FooterCss.footer1}>
                        <h1 className={FooterCss.footer11}>环游世界网</h1>
                        <div className={FooterCss.footer12}>
                            中国年轻一代用得更多的旅游网站
                            <br></br>
                            上亿旅行者共同打造的"旅行神器"
                            <br></br>
                            60,000 多个全球旅游目的地
                            <br></br>
                            600,000 个细分目的地新玩法
                            <br></br>
                            760,000,000 次攻略下载
                            <br></br>
                            38,000 家旅游产品供应商
                        </div>
                </div>
                <div className={FooterCss.footer2}>
                    <div className={FooterCss.footer21}>
                        <h1 className={FooterCss.footer22}>关于我们</h1>
                        <Link to="/about"><li><a className={FooterCss.footer23}>关于环游世界网</a></li></Link>
                        <li><a className={FooterCss.footer24}>联系我们</a></li>
                        <li><a className={FooterCss.footer25}>隐私服务</a></li>
                        <li><a className={FooterCss.footer26}>服务协议</a></li>
                    </div>
                </div>
                <div className={FooterCss.footer3}>
                    <div className={FooterCss.footer31}>
                        <h1 className={FooterCss.footer32}>服务支持</h1>
                        <li><a className={FooterCss.footer33} href="https://www.fliggy.com/">飞猪</a></li>
                        <li><a className={FooterCss.footer34} href="https://www.amap.com/">高德地图</a></li>
                        <li><a className={FooterCss.footer35} href="https://www.12306.cn/">12306</a></li>
                        <li><a className={FooterCss.footer36} href="https://www.ctrip.com/">携程网</a></li>
                    </div>
                </div>
                <div className={FooterCss.footer4}>
                    <h1 className={FooterCss.footer41}>更靠谱的旅游攻略</h1>
                    <h1 className={FooterCss.footer42}>自助游分享社区</h1>
                </div>
            </div>
        )
    }
}