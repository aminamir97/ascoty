import React from 'react'

function FakeSlider({blogsRef}) {
  return (
    <div style={{
        width:"100%",
        height:"700px",
        backgroundColor:"red"
    }} ref={blogsRef}>FakeSlider</div>
  )
}


export default FakeSlider