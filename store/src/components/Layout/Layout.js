import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

const Layout = {
   Main: ({ children }) => {
      return (
         <div>
            <Container bg="primary" className="p-5">
               <Header />
               { children }
            </Container>
         </div>
      )
   }
}

export default Layout