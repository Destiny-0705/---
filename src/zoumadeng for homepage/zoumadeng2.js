import React from 'react';
import { Carousel } from 'antd';
var img4=require('../imgs/zoumadeng for homepage/homepage1.jpg')
var img6=require('../imgs/zoumadeng for homepage/homepage2.jpg')
var img5=require('../imgs/zoumadeng for homepage/homepage3.jpg')
export default class Zoumadeng2 extends React.Component{
    render(){
        return(
            <Carousel autoplay>
            <div>
                <div className={Zoumadeng2.a}><img src={img4} width="100%" height="1000px"></img></div>
                {/* <h3 className={Zoumadeng2.A}>成都</h3> */}
            </div>
            <div>
              <div className={Zoumadeng2.c}><img src={img5} width="100%" height="1000px"></img>></div>
              {/* <div className={Zoumadeng2.A}>成都</div> */}
            </div>
            <div>
              <div className={Zoumadeng2.c}><img src={img6} width="100%" height="1000px"></img>></div>
              {/* <div className={Zoumadeng2.A}>成都</div> */}
            </div>
            
          </Carousel>
        )
    }
}