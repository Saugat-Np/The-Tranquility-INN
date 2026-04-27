import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ id, href, to, onClick, variant = 'primary', children, className = '' }) => {
  const baseClass = 'px-8 py-3 font-bold rounded-full transition-all hover:scale-105 shadow-lg'

  const variants = {
    primary: 'bg-sky-400 hover:bg-sky-500 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-sky-400 border-2 border-sky-400 backdrop-blur-md',
  }

  const classes = `${baseClass} ${variants[variant]} ${className}`

  // React Router Link
  if (to) {
    return (
      <Link id={id} to={to} className={classes}>
        {children}
      </Link>
    )
  }

  // Regular href link
  if (href) {
    return (
      <a id={id} href={href} className={classes}>
        {children}
      </a>
    )
  }

  // Button click handler
  return (
    <button id={id} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
