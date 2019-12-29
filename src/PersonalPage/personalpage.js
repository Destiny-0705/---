import React from 'react';
import{Button,Input,Row,Col} from 'antd';
import Danxuan from '../danxuan/danxuan';
import Zoumadeng from '../Zoumadeng/zoumadeng';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Pagination } from 'antd';
var personalpage = require ('./personalpage.css')
var img3 =require('../imgs/logo1.jpg')



export default  class PersonalPage extends React.Component{
    render(){
        return(
            <div>
                 <div className={personalpage.header}><Header/></div>
            {/* <Row>
                <Col span={24} className={personalpage.all}>
                <Row>
                    <Col span={4} className={personalpage.A}>
                        <img className={personalpage.a} src={img3} alt=""/>
                    </Col>
                    <Col span={4} className={personalpage.B}>
                        <div className={personalpage.b}>
                           旅游足迹
                        </div>
                    </Col>
                    <Col span={4} className={personalpage.C}>
                        <div className={personalpage.c}>
                            个人相册
                        </div>
                    </Col>
                    <Col span={6} className={personalpage.D}>
                        <div className={personalpage.d}>
                            旅游心得
                        </div>
                    </Col>
                    <Col span={3} className={personalpage.E}>
                        <div className={personalpage.e}>
                            
                        <Button icon="search" className={personalpage.ytx}>Search</Button>
                        
                        </div>
                    </Col>
                    <Col span={3} className={personalpage.F}>
                        <div className={personalpage.f}>
                            消息
                        </div>
                    </Col>
                </Row>
                </Col>
            </Row> */}
 
            <Row>
                <Col span={24} className={personalpage.in}>
                    <Row>
                        <Col span={14} className={personalpage.G}>
                        <div className={personalpage.g}>
                        <Zoumadeng className={personalpage.z}></Zoumadeng>
                        </div>
                        </Col>
                        <Col span={10} className={personalpage.H}>
                            <div className={personalpage.h}>个人简介</div>
                            <div className={personalpage.i}>
                                名字：<Input className={personalpage.j}></Input>
                            </div>
                            <div className={personalpage.k}>性别：<Danxuan></Danxuan></div>
                            <div className={personalpage.l}>个性签名:<Input className={personalpage.m}></Input></div>

                        </Col>
                    
                    </Row>
                    <Row>
                        <Col span={24} className={personalpage.brave}>
                           <Row>
                               <Col span={6}>
                               </Col>
                               <Col span={12} className={personalpage.n}>
                                   <div className={personalpage.o}>个人足迹: <Input className={personalpage.p}></Input></div>
                                   <div className={personalpage.q}>个人相册: <Input className={personalpage.r}></Input></div>
                                   <div className={personalpage.s}>旅游心得: <Input className={personalpage.t}></Input></div>

                               </Col>
                               <Col span={6}></Col>
                           </Row>
                       </Col>
                    </Row>
                </Col>
            </Row>
            <div className={personalpage.footer}><Footer/></div>
            </div>
        )
    }
}