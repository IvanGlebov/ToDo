import React from 'react'
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import styles from './Header.module.scss'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 8vh;
  background-color: var(--light-back);
`

export default withTranslation()(connect(
  (store) => ({})
)(class Header extends React.Component{
  render(){
    return(
      <Wrapper>Header</Wrapper>
    )
  }
}))
