import React, { Component } from 'react';
import './child.css';

export class Child extends Component {
  static defaultProps = {
    name: 'Lmao',
  };

  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.makeTimer();
  }

  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }

  render() {
    console.log(this.props.str, typeof this.props.str);
    return (
      <div className='Child'>
        <div>{this.state.num}</div>
        <div className='str'>{this.props.str}</div>
        <div className='str'>{this.props.name}</div>
        <div className='str'>{this.props.n}</div>
        <div className='str'>
          {this.props.obj.name} {this.props.obj.age}
        </div>
        <div className='str'>
          {this.props.arr.map(a => {
            return (
              <span
                style={{
                  color: 'red',
                  backgroundColor: 'tomato',
                  display: 'inline-block',
                  marginRight: '10px',
                }}
              >
                {a}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Child;
