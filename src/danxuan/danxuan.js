import React from 'react';
import { Radio } from 'antd';

export default class Danxuan extends React.Component{state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

    render(){
        return(
            <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>男</Radio>
        <Radio value={2}>女</Radio>
        <Radio value={3}>保密</Radio>
      </Radio.Group>

        )
    }

}