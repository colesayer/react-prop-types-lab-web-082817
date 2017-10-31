import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
  }

  function weightRange(props, propName, componentName){
    let value = props[propName]
    if(!value){
      return new Error(
        "No value entered."
      )
    } else if (typeof value !== "number") {
      return new Error(
        "Value needs to be a number."
      )
    } else if (value < 80 || value > 300) {
      return new Error(
        "Should be within 80-300"
      )
    }
  }
