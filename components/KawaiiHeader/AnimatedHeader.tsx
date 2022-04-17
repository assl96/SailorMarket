import React from 'react'
import { Header, Transition } from 'semantic-ui-react'

import { Chibi } from '@components/SVGIcons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    <p>Sailor
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Chibi size="85px" />
    </Transition>
    Store</p>
<style jsx>
        {`        
        p{
            color: #EC00FF;
            font-family: 'Gill Sans';

          }
`}</style>
  </Header>
)

export default AnimatedHeader
