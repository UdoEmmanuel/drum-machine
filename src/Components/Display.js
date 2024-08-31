import React from 'react'

const Display = ({ activeKey }) => {
  return (
    <div id="display">
      <p id='beat-name'>{ activeKey }</p>
    </div>
  )
}

export default Display    