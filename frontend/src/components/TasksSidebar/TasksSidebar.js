import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { Col, Row } from "react-grid-system";
import styles from './TasksSidebar.scss'
import styled from 'styled-components'
import { Link, Text } from "@ui";
import cx from 'classnames'

const Column = styled.div`
  height: 92vh;
  background-color: var(--dark-blue);
  padding: var(--default-padding);
`
export default withTranslation()(connect(
  (store) => ({
    location: store.router.location.pathname
  })
)(class TasksSidebar extends React.Component {

  route = path => this.routes.find(r => path.match(r[0]) !== null)?.[1]?.()

  render() {
    const { location } = this.props
    return (
      <Column>
        <Link to='/tasks' className={cx(styles.listLink, {[styles.linkActive]: location === '/tasks' })}>All tasks</Link>
        <Link to='/tasks/today' className={cx(styles.listLink, {[styles.linkActive]: location === '/tasks/today' })}>Today</Link>
      </Column>
    )
  }
}))
