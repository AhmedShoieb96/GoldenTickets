import React from 'react'

function Location() {
  return (
    <div className='w-full  h-[200px] rounded-xl'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.062283244001!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMDguNiJF!5e0!3m2!1sen!2seg!4v1634830741221!5m2!1sen!2seg'
        height='100%'
        allowFullScreen
        loading='lazy'
        style={{ border: 0 }}
        className='rounded-xl shadow-lg w-full'
      ></iframe>
    </div>
  )
}

export default Location
