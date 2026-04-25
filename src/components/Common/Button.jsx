import React from 'react'

const Button = ({ id, href, onClick, variant = 'primary', children, className = '' }) => {
  const baseClass = 'px-8 py-3 font-bold rounded-full transition-all hover:scale-105 shadow-lg'

  const variants = {
    primary: 'bg-sky-400 hover:bg-sky-500 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-sky-400 border-2 border-sky-400 backdrop-blur-md',
  }

  const classes = `${baseClass} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a id={id} href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button id={id} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
