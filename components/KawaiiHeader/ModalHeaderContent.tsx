import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import { PosMeMuero } from '@components/SVGIcons'

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width="5">
            <PosMeMuero size="154px" />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">Mataste a Usagui</Header>
            <p className='p'>La tocaste tanto que lo mataste.</p>
            <p>
              Por otro lado, eres una persona muy curiosa y has descubierto
              esto. 💜
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <style jsx global>{`
        container {
          padding: 2rem;
          color:black
        }
        p{
          color: black !important;
        }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
