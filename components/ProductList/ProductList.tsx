import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'white' }}>{price}</Card.Meta>}
      />
    </Link>
  ))
  
  const ProductList = ({ products }: ProductListProps) => (
    <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
    <style jsx global>{`
      .ui.card>.content, .ui.cards>.card>.content {
      background: #F682FF;
      color: white
      }
      .ui.cards>.card>.content>.header:not(.ui) {
        color: white;
      }
    `}</style>
  </Card.Group>
)

export default ProductList
