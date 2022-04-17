import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

import  {Chibi}  from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los productos"
          >
            <Chibi />
            <p>Sailor Store</p>
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === '/cart'}>
              <p><ShoppingCartIcon cartCount={cartCount} name="Shopping Basket" /></p>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
          background-color: #F464FF;
        }
        p{
          color: white;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
