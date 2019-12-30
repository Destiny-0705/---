import { Menu, Icon } from 'antd';
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Carousel } from 'antd';

export default class Goods extends React.Component{

    render() {
        return (
            <div>


  <Carousel autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
            </div>
        );
    }
}

