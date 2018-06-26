// @flow

import * as React from 'react'
import styled from 'styled-components'
import { Checkbox } from './checkbox'

type Props = {
  label: string
}

export const Field = (props: Props) => (
  <Wrapper>
    <Label>
      <CheckboxWrapper>
        <Checkbox />
      </CheckboxWrapper>
      {props.label}
    </Label>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f2fcff;
  }
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
