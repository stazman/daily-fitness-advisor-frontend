import React from 'react'
import { Container, Row } from 'react-bootstrap'
import RowStyles from './styles/RowStyles'

export const Layout = (props) => {
  return (
    <Container>
      <RowStyles>
        <Row>
          {props.children}
        </Row>
      </RowStyles>
    </Container>
  )
}
