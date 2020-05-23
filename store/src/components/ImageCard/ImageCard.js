import React, { useState } from "react"
import { Card } from "react-bootstrap"

const styles = {
  card: {
    maxWidth: 400,
    transition: ".5s",
    border: "10px solid var(--light)",
  },
  cardHovered: {
    maxWidth: 400,
    transition: ".5s",
    border: "10px solid var(--primary)",
  },
}

function ImageCard({ src, title }) {
  const [hover, setHover] = useState(false)
  return (
    <Card
      onMouseLeave={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      onFocus={() => setHover(true)}
      style={hover ? styles.cardHovered : styles.card}
      className="overflow-hidden"
    >
      {title && (
        <Card.Header className="bg-transparent text-center border-0 p-3">
          <span className="pb-1 title">{title}</span>
        </Card.Header>
      )}
      <Card.Img className="rounded-0 h-100 img-fluid" src={src} />
    </Card>
  )
}

export default ImageCard
