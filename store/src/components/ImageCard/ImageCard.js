import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

const StyledCard = styled(Card)`
  max-width: 400px;
  transition: 0.5s;
  border: 10px solid var(--light);

  &:hover{
    border: 10px solid var(--primary);
  }
  `
  
const ImageCard = ({ src, title }) => {
  return (
    <StyledCard
      className="overflow-hidden"
    >
      {title && (
        <Card.Header className="bg-transparent text-center border-0 p-3">
          <span className="pb-1 title">{title}</span>
        </Card.Header>
      )}
      <Card.Img className="rounded-0 h-100 img-fluid" src={src} />
    </StyledCard>
  )
}


export default ImageCard