import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

window.Backbone = Backbone
import Stoplight from './stoplight.js'

const app = function() {
  ReactDOM.render(<Stoplight />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..