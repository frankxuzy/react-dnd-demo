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
    const {connectDragSource, isDragging} = this.props
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 80,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♘
      </div>
    )
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
