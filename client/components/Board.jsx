import React, {Component} from 'react'
import propTypes from 'prop-types'

import Knight from './Knight'
import BoardSquare from './BoardSquare'

class Board extends Component {
  constructor (props) {
    super(props)
    this.renderSquare = this.renderSquare.bind(this)
  }
  renderSquare (i, j) {
    const x = i
    const y = j

    const [knightX, knightY] = this.props.knightPosition
    const piece = (x === knightX && y === knightY)
      ? <Knight />
      : null

    return (
      <div className='board' key={i + (j + 1) * 10} style = {{width: '12.5%', height: '120px'}}>
        <BoardSquare x={x} y={y}>
          {piece}
        </BoardSquare>
      </div>
    )
  }
  render () {
    const squares = []
    for (let j = 0; j < 8; j++) {
      for (let i = 0; i < 8; i++) {
        squares.push(this.renderSquare(i, j))
      }
    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }} >
        {squares}
      </div>
    )
  }
}

Board.propTypes = {
  knightPosition: propTypes.arrayOf(
    propTypes.number.isRequired
  ).isRequired
}

export default Board
