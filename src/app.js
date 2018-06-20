// @flow

import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Card } from './components/card'
import { ButtonGroup } from './components/button-group'

const globalStyles = `
html, body {
  font-size: 14px;
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

const CardContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardContainer>
          <Box my={10}>
            <Card>
              <ButtonGroup
                values={['rub', 'usd', 'eur']}
                deafaultSelected="rub"
                onChange={el => console.log(el)}
              />
            </Card>
          </Box>
          <Box my={10}>
            <Card>Echshe hellO!</Card>
          </Box>
        </CardContainer>
      </div>
    )
  }
}

export default App
