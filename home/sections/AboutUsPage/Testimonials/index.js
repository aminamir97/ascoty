import React from 'react'
import Testimonials from '../../../components/Testimonials';

function TestimonialsSection({testimonialsRef}) {
  return (
    <div ref={testimonialsRef}>
   <Testimonials  />
    </div>
     
  )
}

export default TestimonialsSection