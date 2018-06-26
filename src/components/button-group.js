// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  values: string[],
  deafaultSelected: string,
  onChange?: string => any,
}

type State = {
  selected: string
}

export class ButtonGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selected: props.deafaultSelected
    }
  }

  onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ selected: e.target.value })
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <form onChange={this.onChange}>
          {this.props.values.map(el => (
            <Label onKeyDown={this.onKeyDown} tabIndex={0} selected={this.state.selected === el} key={el}>
              <LabelInner>
                <RadioInput name="random" type="radio" value={el} />
                <LabelText selected={this.state.selected === el}>
                  {el}
                </LabelText>
              </LabelInner>
            </Label>
          ))}
        </form>
      </div>
    )
  }
}

const Label = styled.label`
  cursor: pointer;
  padding: 9px 20px;
  position: relative;
  height: 40px;
  border: ${props =>
    props.selected ? '1px solid #2196f3' : '1px solid #d2d5d6'};
  display: inline-block;
  background: ${props => (props.selected ? '#2196f3' : '$FFF')}
  &:last-child {
    border-radius: 0px 5px 5px 0px;
  }
  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }
  &:hover {
    background-color: ${props => (props.selected ? '#2196f3' : '#f2fcff')};
    border: 1px solid #2196f3;
  }
`

const LabelInner = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const LabelText = styled.span`
  color: ${props => (props.selected ? '#FFF' : '#2196f3')};
  text-transform: uppercase;
  font-weight: 600;
  line-height: 22px;
`

const RadioInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
`
