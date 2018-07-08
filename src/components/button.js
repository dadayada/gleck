// @flow

import styled from 'styled-components'

export const Button = styled.button`
  width: 160px;
  transition: background-color 0.5s;
  color: #ffff;
  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  outline: none;
  padding: 5px 40px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1), 0 1px 0 #d64d08;
  border-radius: 5px;
  background-color: #ff6d00;
  &:hover {
    background-color: #ff8124;
  }
`
