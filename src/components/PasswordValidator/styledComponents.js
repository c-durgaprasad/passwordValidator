// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #475569;
  width: 80%;
  border-radius: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
  }
`
export const PsHeading = styled.h1`
  margin: 0px;
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 22px;
  padding-top: 22px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 500;
    padding-top: 70px;
  }
`

export const PsDesc = styled.p`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 14px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 11px;
    padding-top: 20px;
  }
`

export const PsInput = styled.input`
  height: 34px;
  width: 70%;
  margin-top: 25px;
  font-family: 'Roboto';
  outline: none;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const ErrMsg = styled.p`
  font-family: 'Roboto';
  color: #ef4444;
  margin: 0px;
  font-size: 14px;
  padding-top: 3px;
  @media screen and (min-width: 768px) {
    font-size: 11px;
    padding-top: 6px;
  }
`
