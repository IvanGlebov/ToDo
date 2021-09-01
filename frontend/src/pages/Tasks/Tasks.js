import React from 'react'
import {withTranslation} from 'react-i18next'
import {connect} from 'react-redux'
import {TasksSidebar} from '@components'
import styled from "styled-components";
import {doFetchTasks} from "@reducers/userActions";
import {Button} from "@ui";

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
  (store) => ({
    tasks: store.user.get('tasks').toJS(),
  }),
  (dispatch) => ({
    doFetchTasks: (page, successChecker, errorChecker) => doFetchTasks(dispatch, page, successChecker, errorChecker)
  })
)(class Tasks extends React.Component {

  componentDidMount() {
    this.props.doFetchTasks(1,
      (res) => {
        // console.log(res)
        return true
      }, null)
  }

  render() {
    return (
      <Row>
        <Col style={{maxWidth: '290px'}}>
          <TasksSidebar/>
        </Col>
        <Col style={{margin: '0  15px'}}>
          <Button color='black'  onClick={()=>this.props.doFetchTasks(1,
            (res) => {
              console.log(res)
              return true
            }, null)}>Refresh</Button>
          { this.props.tasks?.map((item, index) => {
            console.log(item)
            return (<Task key={item?.name + index}>{item?.name}</Task>)
          })
          }
          <Task>
            simple static task
          </Task>
        </Col>
      </Row>
    )
  }
}))
