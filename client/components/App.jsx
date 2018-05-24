import React from 'react'
import Board from './Board'

class App extends React.Component {
  render () {
    return (
      <Board knightPosition={[2, 1]} />
    )
  }
}

export default App
