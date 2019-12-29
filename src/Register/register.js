import React from 'react';
import{Button,Input,Row,Col} from 'antd';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Pagination } from 'antd';
import Header2 from '../Header for register/header2';
var register = require ('./register.css')
var img2 =require('../imgs/logo.jpg')

export default class Register extends React.Component{
    render(){
        return(
            <div className={register.all}>
                <div className={register.header} ><Header2/></div>
                <hr className={register.underline}></hr>
                <div className={register.content}>
                      
                        <div className={register.content2}> 
                            <div className={register.e}>
                                手机号码:  <Input className={register.z} placeholder="请输入手机号码"></Input>
                            </div>
                            <div className={register.g}>
                                密码:  <Input className={register.w}  placeholder="密码由6-20位数字、密码、特殊字符组成"></Input>
                            </div>
                            <div className={register.i}>
                                确认密码:<Input className={register.u} placeholder="请确认密码"></Input>
                            </div>
                            <div className={register.f}>
                                验证码:  <Input className={register.y}></Input>
                                <Button type="primary" className={register.y2}>获取验证码</Button>
                            </div>

                            <div className={register.j}>
                                <Button type="primary" className={register.button}>确认注册</Button>
                            </div>
                        </div>
                      
                </div>
            </div>
                
            
        )
    }
}