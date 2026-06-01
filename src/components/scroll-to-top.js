import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import './scroll-to-top.css'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
      aria-label="Back to top"
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="scroll-to-top__icon">
        <path d="M12 5.5 4.75 12.75l1.5 1.5L11 9.5V20h2V9.5l4.75 4.75 1.5-1.5z" />
      </svg>
    </button>
  )
}

export default ScrollToTop
