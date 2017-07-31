import './App.css'

import React, {Component} from 'react'


import store from './store'
store.dispatch({type: "ADD_NODE", name: "Ethan"})

class App extends Component {
  render() {
    return <div className="App">
      
    </div>
  }
}

export default App
