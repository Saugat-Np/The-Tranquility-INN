import React from 'react'

const SectionGrid = ({
  id = 'section-grid',
  children,
  columns = 'lg:grid-cols-3'
}) => {
  return (
    <div 
      id={id}
      className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-6 sm:gap-8 lg:gap-10`}
    >
      {children}
    </div>
  )
}

export default SectionGrid
