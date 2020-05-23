import React, { useState } from "react"
import { Image } from "react-bootstrap"

const styles = {
  imageCard: {
    height: "20rem",
    transition: ".5s",
    border: "10px solid var(--light)",
  },
  imageCardHovered: {
    height: "20rem",
    transition: ".5s",
    border: "10px solid var(--primary)",
  },
}

function ImageCard({ src }) {
  const [hover, setHover] = useState(false)
  return (
    <div>
      <Image
        onMouseLeave={() => setHover(false)}
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        style={hover ? styles.imageCardHovered : styles.imageCard}
        src={src}
        thumbnail
      />
    </div>
  )
}

export default ImageCard
