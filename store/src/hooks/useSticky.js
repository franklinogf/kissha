import { useEffect, useState, useRef } from "react"

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().y
      ? setSticky(true)
      : setSticky(false)
  }



  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  })

  return { isSticky, element }
}

export default useSticky