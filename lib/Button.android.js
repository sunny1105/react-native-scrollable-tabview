import React from 'react'
import ReactNative from 'react-native'

const {TouchableNativeFeedback} = ReactNative

 const Button = (props) =>
  <TouchableNativeFeedback
    delayPressIn={0}
    background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
    {...props}
  >
    {props.children}
  </TouchableNativeFeedback>

export default Button;
