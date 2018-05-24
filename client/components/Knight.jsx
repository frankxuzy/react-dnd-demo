import React, {Component} from 'react'
import {DragSource} from 'react-dnd'

import {ItemTypes} from '../utils'

const knightSource = {
  beginDrag (props) {
    return {}
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  render () {
    return (
      <span style = {{
        fontSize: '80px'
      }}>
      ♘
      </span>
    )
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
