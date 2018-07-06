// @flow

import * as React from 'react'
import { Box } from 'grid-styled'
import { Field } from './checkbox-field'

type Props = {
  onChange: (stops: number, value: boolean, only: boolean) => any
}

export class CheckboxGroup extends React.Component<Props> {

  render() {
    return (
      <Box>
        <Field onChange={change => this.props.onChange(1, change, false)} label="1 пересадка"/>
        <Field onChange={change => this.props.onChange(2, change, false)} label="2 пересадки"/>
        <Field onChange={change => this.props.onChange(3, change, false)} label="3 пересадки"/>
      </Box>
    )
  }
}