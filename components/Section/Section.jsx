import React from 'react'

const Section = ({ children, bgImage, bgStyles, className }) => {
  return (
    <section className={`flex flex-col relative ${className}`} style={
        bgImage && bgStyles ? { backgroundImage: `url(${bgImage})`, ...bgStyles} : {}        
      }>
      {children}
    </section>
  )
}

export default Section