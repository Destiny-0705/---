import React from 'react';
import { Carousel } from 'antd';
var img4=require('../imgs/成都2.jpeg')
var img5=require('../imgs/埃菲尔铁塔2.jpeg')
var img6=require('../imgs/free2.jpeg')
export default class Zoumadeng extends React.Component{
    render(){
        return(
            <Carousel autoplay>
            <div>
              <div><img className={Zoumadeng.a} src={img4} alt=""/></div>
              <h3 className={Zoumadeng.A}>成都</h3>
            </div>
            <div>
              <div><img className={Zoumadeng.b} src={img5} alt=""/></div>
              <div className={Zoumadeng.A}>成都</div>
            </div>
            <div>
              <div><img className={Zoumadeng.c} src={img6} alt=""/></div>
              <div className={Zoumadeng.A}>成都</div>
            </div>
            
          </Carousel>
        )
    }
}
    