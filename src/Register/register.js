import React from 'react';
import{Button,Input,Row,Col,message} from 'antd';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Pagination } from 'antd';
import Header2 from '../Header for register/header2';
var register = require ('./register.css')
var img2 =require('../imgs/logo.jpg')

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    ChangeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload=()=>{
        var xhr = new XMLHttpRequest()
        var data={
            "username":this.state.username,
            "phonenumber":this.state.phonenumber,
            "password":this.state.password,
            "email":this.state.email
        }
        // open连接
        xhr.open("post","/user/register")
        // 配置响应函数
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    // **************注册提示词****************
                    if(result.state==1){
                        message.info("用户名或邮箱已被占用")
                    }else if(result.state==2){
                        message.info("注册成功")
                        this.props.history.push("/homepage")
                    }

                }else{
                    message.info(xhr.status)
                }
            }    
        }
        // 发送数据
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify(data))
    }
    render(){
        return(
            <div className={register.all}>
                <div className={register.header} ><Header2/></div>
                <hr className={register.underline}></hr>
                <div className={register.content}>
                      
                        <div className={register.content2}> 
                            <div className={register.d}>
                                用户名:  <Input className={register.p} placeholder="用户名不能超过30个字符" maxLength="30" name="username" value={this.state.username} onChange={e=>this.ChangeValue(e)}></Input>
                            </div>
                            <div className={register.e}>
                                手机号码:  <Input className={register.z} placeholder="请输入手机号码" name="phonenumber" value={this.state.phonenumber} onChange={e=>this.ChangeValue(e)}></Input>
                            </div>
                            <div className={register.g}>
                                邮箱:  <Input className={register.w}  placeholder="请输入邮箱号" name="email" value={this.state.email} onChange={e=>this.ChangeValue(e)}></Input>
                            </div>
                            <div className={register.g}>
                                密码:  <Input className={register.w}  placeholder="密码由6-20位数字、密码、特殊字符组成" name="password" value={this.state.password} onChange={e=>this.ChangeValue(e)}></Input>
                            </div>
                            {/* <div className={register.i}>
                                确认密码: <Input className={register.u} placeholder="请确认密码"></Input>
                            </div> */}
                            {/* <div className={register.f}>
                                验证码:  <Input className={register.y}></Input>
                                <Button type="primary" className={register.y2}>获取验证码</Button>
                            </div> */}

                            <div className={register.j}>
                                <Button type="primary" className={register.button} onClick={this.upload()}>确认注册</Button>
                            </div>
                        </div>
                      
                </div>
            </div>
                
            
        )
    }
}