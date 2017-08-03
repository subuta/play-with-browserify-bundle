import React from 'react'
import ReactDOM from 'react-dom'

// import exported component
const HelloWorld = window.MyComponents.HelloWorld.default

const App = () => {
  return (
    <div>
      <h1>HELLO</h1>
      <HelloWorld />
    </div>
  )
}

const update = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app-container')
  )
}

if (document.readyState === 'complete' || document.readyState !== 'loading') {
  update()
} else {
  document.addEventListener('DOMContentLoaded', update)
}
