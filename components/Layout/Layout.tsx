import React from "react";
import Navbar from "@components/Navbar/Navbar";
import { Container } from 'semantic-ui-react'
import Footer from '@components/Footer/Footer'
import 'semantic-ui-css/semantic.min.css'
//path aliases para js o para typescript
// se configuran en el archivo tscongifg.json
//restart server typescript 'comand+shift+p and write type restart server'

type LayoutProps = {
    children?: React.ReactNode
  }
  
  const Layout = ({ children }: LayoutProps) => (
    <>
    <div className="container">
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
        </div>
          <style jsx>{`
        .container {
          background-color: #ECB1FF;
        } 
        `}</style>
    </>
  )
  

export default Layout