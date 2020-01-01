import { Menu, Icon } from 'antd';
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Carousel } from 'antd';
import Header5 from '../Header for goods/header5';
var img1=require('../imgs/ad of goods/1.jpg')
var img2=require('../imgs/ad of goods/2.jpg')
var img3=require('../imgs/ad of goods/3.jpg')

export default class Goods extends React.Component{

    render() {
        return (
            <div>
                <div className={Goods.header}><Header5/></div>
                {/* <div className={Goods.leader}>
                  <div className={Goods.leader1}>
                    精选好货
                  </div>
                  <div className={Goods.leader1}>
                    qccwwqc
                  </div>
                  <div className={Goods.leader1}>
                    wqcqwc
                  </div>
                  <div className={Goods.leader1}>
                    qwcq
                  </div>
                </div> */}



  <Carousel autoplay>
    <div>
    <div className={Goods.a}><img src={img1} width="70%" height="550px"></img></div>
    </div>
    <div>
    <div className={Goods.a}><img src={img2} width="70%" height="550px"></img></div>
    </div>
    <div>
    <div className={Goods.a}><img src={img3} width="70%" height="550px"></img></div>
    </div>
  </Carousel>
              <div className={Goods.Footer}><Footer/></div>
            </div>
        );
    }
}

