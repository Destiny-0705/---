// 主页
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import background from '../imgs/巴黎/bali1.jpg';
import Header4 from '../Header for homepage/header4';





var HomePageCss = require('./homepage.css')
var img1 = require('../imgs/悉尼/timg.jpg')

export default class HomePage extends React.Component{
    render(){
        return(
            <div className={HomePageCss.homepage1}>
                    <div className={HomePageCss.header}><Header4/></div>
                    
                    <div className={HomePageCss.background} style={{backgroundImage:`url(${background})`}}>
                    <img src={background} width="100%" height='100%' / >
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
                {/* <Footer/> */}
            </div>
            </div>
        )
    }
}
