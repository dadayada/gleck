// @flow

import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Box } from 'grid-styled'
import { Card } from './components/card'
import { Ticket } from './components/ticket'
import { ButtonGroup } from './components/button-group'
import { CheckboxGroup } from './components/checkbox-group'
import { tickets } from './tickets'

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

const rubToUsd = (val: number) => val / 62
const rubToEur = (val: number) => val / 70

export type StopsState = [boolean, boolean, boolean]
export type Currency = 'RUB' | 'USD' | 'EUR'

type State = {
  currencyFilter: Currency,
  stopsFilter: StopsState
}

class App extends Component<void, State> {
  state = {
    currencyFilter: 'RUB',
    stopsFilter: [false, false, false]
  }

  clearStopsFilter = () => {
    // [ 1 stop, 2 stops, 3 stops ]
    this.setState({ stopsFilter: [false, false, false] })
  }

  setStopsFilter = (stops: number, value: boolean, only: boolean) => {
    const { stopsFilter } = this.state
    let newState = [...stopsFilter]
    if (only) {
      switch (stops) {
        case 1:
          newState = [value, false, false]
          break
        case 2:
          newState = [false, value, false]
          break
        case 3:
          newState = [false, false, value]
          break
      }
    } else {
      switch (stops) {
        case 1:
          newState[0] = value
          break
        case 2:
          newState[1] = value
          break
        case 3:
          newState[2] = value
          break
      }
    }
    this.setState({ stopsFilter: newState })
  }

  onCurrencyChange = (currency: string) => {
    this.setState({ currencyFilter: currency })
  }

  render() {
    const { stopsFilter, currencyFilter } = this.state

    const filteredTickets = tickets
      .filter(
        el =>
          (el.stops === 1 && stopsFilter[0]) ||
          (el.stops === 2 && stopsFilter[1]) ||
          (el.stops === 3 && stopsFilter[2])
      )
      .map(el => {
        if (currencyFilter === 'EUR') {
          return { ...el, price: Math.ceil(rubToEur(el.price)) }
        }
        if (currencyFilter === 'USD') {
          return { ...el, price: Math.ceil(rubToUsd(el.price)) }
        }
        return el
      })

    return (
      <div className="App">
        <Container>
          <ResponsiveFilters>
            <Box flex="initital 0" my={10} mx={10}>
              <Card>
                <Box p={10}>
                  <FilterLabel>валюта</FilterLabel>
                  <Box m={10}>
                    <ButtonGroup
                      values={['RUB', 'USD', 'EUR']}
                      deafaultSelected="RUB"
                      onChange={this.onCurrencyChange}
                    />
                  </Box>
                  <FilterLabel>количество пересадок</FilterLabel>
                  <Box m={10}>
                    <CheckboxGroup onChange={this.setStopsFilter} />
                  </Box>
                </Box>
              </Card>
            </Box>
          </ResponsiveFilters>
          <Box flex="1">
            {filteredTickets.map(ticket => (
              <Box mr={10}>
                <Ticket flight={ticket} currency={this.state.currencyFilter} />
              </Box>
            ))}
          </Box>
        </Container>
      </div>
    )
  }
}

const ResponsiveFilters = styled(Box)`
  @media (max-width: 862px) {
    position: fixed;
    visibility: hidden;
  }
`

export default App
