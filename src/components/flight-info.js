// @flow

import * as React from 'react'
import styled from 'styled-components'
import TransferImage from './transfer-icon.png'

type Props = {
  flight: {
    origin: 'VVO',
    origin_name: string,
    destination: string,
    destination_name: string,
    departure_date: string,
    departure_time: string,
    arrival_date: string,
    arrival_time: string,
    stops: number
  }
}

export const FlightInfo = (props: Props) => (
  <Wrapper>
    <div>
      <Time>{props.flight.departure_time}</Time>
      <Destination>
        {props.flight.origin}, {props.flight.origin_name}
      </Destination>
      <Date>{props.flight.departure_date}</Date>
    </div>
    <Transfers>{`${props.flight.stops} пересадок`}</Transfers>
    <div>
      <Time>{props.flight.arrival_time}</Time>
      <Destination>
        {props.flight.destination}, {props.flight.destination_name}
      </Destination>
      <Date>{props.flight.arrival_date}</Date>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url(${TransferImage});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  width: 350px;
  position: relative;
`

const Transfers = styled.span`
  font-weight: 600;
  color: #8b9497;
  text-transform: uppercase;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
`

const Time = styled.span`
  font-size: 32px;
  display: block;
`

const Destination = styled.span`
  font-weight: 600;
  display: block;
`

const Date = styled.span`
  color: #8b9497;
  display: block;
`
