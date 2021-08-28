import React from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { TasksSidebar } from '@components'
import styled from "styled-components";

const Task = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  margin: var(--default-padding) 0;
  padding: var(--default-padding);
  border-radius: var(--medium-radius);
  height: 50px;
  //min-height: 50px;
  //max-height: 81px;
  width: 100%;
  border: #9BA4B4 solid 1px;
`

const Col = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: flex;
`

export default withTranslation()(connect(

)(class Tasks extends React.Component {


  render() {
    return (
      <Row>
        <Col style={{ maxWidth: '290px' }}>
          <TasksSidebar />
        </Col>
        <Col style={{ margin: '0  15px' }}>
          <Task>
            simple task
          </Task>
        </Col>
      </Row>
    )
  }
}))
