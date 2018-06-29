// @flow

import * as React from 'react'
import styled from 'styled-components'
import { Checkbox } from './checkbox'

type Props = {
  label: string
}

type State = {
  focused: boolean
}

export class Field extends React.Component<Props, State> {
  state = {
    focused: false
  }

  render() {
    return (
      <Wrapper focused={this.state.focused}>
        <Label>
          <CheckboxWrapper>
            <Checkbox
              onFocus={() => this.setState({ focused: true })}
              onBlur={() => this.setState({ focused: false })}
            />
          </CheckboxWrapper>
          {this.props.label}
        </Label>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f2fcff;
  };
  background-color: ${props => props.focused ? '#f2fcff' : 'initial'};
`

const Label = styled.label`
  vertical-align: middle;
  cursor: pointer;
`

const CheckboxWrapper = styled.span`
  vertical-align: middle;
  margin-right: 11px;
  display: inline-block;
`
