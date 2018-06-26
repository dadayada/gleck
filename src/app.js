// @flow

import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Card } from './components/card'
import { Ticket } from './components/ticket'
import { ButtonGroup } from './components/button-group'

const globalStyles = `
html, body {
  font-size: 12px;
  color: #4a4a4a;
  font-family: "Open Sans";;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  background-color: #f3f7fa;
}
a {
  text-decoration: none;
  color: #003569;
}
a:visited, a:focus, a:active {
  color: #003569;
}
* {
  box-sizing: border-box;
}
`
injectGlobal`${globalStyles}`

const Container = styled.div`
  max-width: 1024px;
  display: flex;
  margin: 0 auto;
`

const FilterLabel = styled.label`
  text-transform: uppercase;
  font-weight: 700;
`

class App extends Component<void> {
  render() {
    return (
      <div className="App">
        <Container>
          <Box w={1 / 4} my={10} mx={10}>
            <Card>
              <Box p={10}>
                <FilterLabel>валюта</FilterLabel>
                <ButtonGroup
                  values={['RUB', 'USD', 'EUR']}
                  deafaultSelected="RUB"
                />
              </Box>
            </Card>
          </Box>
          <Box w={3 / 4}>
            <Box my={10}>
              <Ticket
                flight={{
                  origin: 'VVO',
                  origin_name: 'Владивосток',
                  destination: 'TLV',
                  destination_name: 'Тель-Авив',
                  departure_date: '12.05.18',
                  departure_time: '17:00',
                  arrival_date: '12.05.18',
                  arrival_time: '23:30',
                  carrier: 'TK',
                  stops: 2,
                  price: 11000
                }}
              />
            </Box>
          </Box>
        </Container>
      </div>
    )
  }
}

export default App
