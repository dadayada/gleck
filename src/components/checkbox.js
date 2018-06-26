// @flow

import * as React from 'react'
import styled from 'styled-components'
import Check from './check.png'

type Props = {
  onChange: boolean => void
}

type State = {
  checked: boolean
}

export class Checkbox extends React.Component<Props, State> {
  state = {
    checked: false
  }

  onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ checked: e.target.checked })
  }

  render() {
    return (
      <Wrapper checked={this.state.checked}>
        <Input type="checkbox" onChange={this.onChange} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.span`
  width: 19px;
  height: 19px;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #d2d5d6;
  background-color: ${props => (props.checked ? '#f2fcff' : '#FFFF')};
  background-image: ${props => props.checked ? `url(${Check})` : 'none'};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  &:hover {
    background-color: #f2fcff;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
`
