// @flow
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.Node,
  className?: string
}

export const Card = (props: Props) => (
  <Base className={props.className}>
    {props.children}
  </Base>
)

const Base = styled.div`
  box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
`
