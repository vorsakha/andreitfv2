import React, { useState, useEffect } from "react"

import { Button, Arrow } from "./ScrollButton.styles"

const ScrollButton = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  function handleScroll() {
    if (window.scrollY >= 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Button scrolled={scrolled} onClick={scrollToTop}>
      <Arrow />
    </Button>
  )
}

export default ScrollButton
