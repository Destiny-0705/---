import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

var Content1Css = require('./content1.css')

export default class Content1 extends React.Component{
    render(){
        return(
            <div className={Content1Css.content1}>
                <div className={Content1Css.header}><Header/></div>
                <div>

                </div>
            </div>
                      )
      }
  }