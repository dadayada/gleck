// @flow

import * as React from 'react'
import styled from 'styled-components'
import { Card } from './card'
import { Button } from './button'
import { FlightInfo } from './flight-info'
import type { Currency } from '../app'

type Props = {
  currency: Currency,
  flight: {
    origin: 'VVO',
    origin_name: string,
    destination: string,
    destination_name: string,
    departure_date: string,
    departure_time: string,
    arrival_date: string,
    arrival_time: string,
    stops: number,
    price: number
  }
}

export class Ticket extends React.Component<Props> {

  render() {
    let currencySymbol
    switch (this.props.currency) {
      case 'USD':
        currencySymbol = '$'
        break
      case 'EUR':
        currencySymbol = '€'
        break
      case 'RUB':
        currencySymbol = '₽'
        break
    }
    return (
      <Card>
        <Left>
          <Button>
            <div>Купить</div>
            <span> за {this.props.flight.price} {currencySymbol}</span>
          </Button>
        </Left>
        <Right>
          <FlightInfo flight={this.props.flight} />
        </Right>
      </Card>
    )
  }
}

const Left = styled.div`
  width: 200px;
  border-right: 1px solid #eceff1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`
