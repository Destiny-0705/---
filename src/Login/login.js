import React from 'react';
import {Link} from 'react-router-dom'
import Header3 from '../Header for login/header3';
import { Pagination } from 'antd';
import{Button,Input,Row,Col,message} from 'antd';

var img1 =require('../imgs/夜景3.jpg')
var login = require('./login.css')

export default class Login extends React.Component {
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
            "password":this.state.password
        }
    //     // open连接
    //     xhr.open("post","/user/login")
    //     // 配置响应函数
    //     xhr.onreadystatechange=function(){
    //         if(xhr.readyState==4){
    //             if(xhr.status==200){
    //                 message.info(xhr.responseText)
    //                 console.log(xhr.responseText)
    //             }else{
    //                 message.info(xhr.status)
    //             }
    //         }    
    //     }
    //     // 发送数据
    //     xhr.send(data)
    // }


    // fetch
    fetch("/user/login",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
        if(result.state==2){
            message.info("账号或密码错误")
        }else if(result.state==1){
            message.info("欢迎登录环球旅游网")
            this.props.history.push("/personalpage")
        }
    }).catch(e=>{
        message.error(e);
    })

    }

    render() {
        return (
            <div>
                <div className={login.header}><Header3/></div>
                <hr className={login.underline}></hr>
                <div className={login.content}>
                        <div className={login.content2}>
                                <div>
                                    {/* <div className={login.login01}>用户登录</div> */}
                                    <div className={login.login02}>
                                        <Input placeholder="会员名" className={login.login021}name="username" ></Input>
                                    </div>
                                    <div className={login.login03}>
                                        <Input placeholder="密码" className={login.login031} name="password" ></Input>
                                    </div>
                                </div>
                                <div className={login.d}>
                                    <Link to="/personalpage"><Button type="primary" className={login.loginbutton}>
                                        登录                                 
                                    </Button>
                                    </Link>
                                    <br></br>
                                    <div className={login.register}>
                                        新用户, <Link to="/register" className={login.register01}><a>立即注册 ></a></Link>
                                    </div>
                                </div> 
                        </div>

                </div>
            </div>
        )
    }

}
