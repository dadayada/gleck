// @flow

import * as React from 'react'
import { Box } from 'grid-styled'
import { Field } from './checkbox-field'

export class CheckboxGroup extends React.Component {
  render() {
    return (
      <Box p={10}>
        <Field label="1 пересадка"/>
        <Field label="2 пересадки"/>
        <Field label="3 пересадки"/>
      </Box>
    )
  }
}