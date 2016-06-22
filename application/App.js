import React      from 'react';
import ReactDOM   from 'react-dom';
import styles     from './App.css';
import classNames from 'classNames/bind';

const css = classNames.bind(styles);

class Rgb extends React.Component {

  constructor() {
    super();
    this.state = {
      red: 255,
      green: 255,
      blue: 255
    }
    this.updateRed = this.updateRed.bind(this);
    this.updateGreen = this.updateGreen.bind(this);
    this.updateBlue = this.updateBlue.bind(this);
  }

  updateRed(e) {
    this.setState({
      red: e.target.value
    })
  }

  updateGreen(e) {
    this.setState({
      green: e.target.value
    })
  }

  updateBlue(e) {
    this.setState({
      blue: e.target.value
    })
  }

  render(){
    return (
      <div className={ css( 'container') } id="hola" style={ { backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`} }>
        <div>
          <Controller update={this.updateRed} valueText={this.state.red} />
          <Controller update={this.updateGreen} valueText={this.state.green} />
          <Controller update={this.updateBlue} valueText={this.state.blue} />
        </div>
      </div>
    );
  }
}

const Controller = ({valueText, update , defaultBg}) => {
  return (
    <div>
      <p rclassName={ css('current-value') } >{valueText}</p>
      <input type="range" min='0' max='255'  defaultValue="255" onChange={ update } />
    </div>
  )
}

ReactDOM.render(
  <Rgb />,
  document.querySelector('#Rgb')
)
