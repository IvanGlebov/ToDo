import React from 'react'
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Tasks } from "@pages";
import Header from "@components/Header/Header";


export default withTranslation()(connect(
  (store)=>({
    location: store.router.location.pathname
  })
)(class App extends React.Component {

  static propTypes = {
    location: PropTypes.string.isRequired
  }

  routes = [
    ['^/$', () => <div>main</div>],
    ['^/login', () => <div>login</div>],
    ['^/tasks', () => <Tasks />]
  ]

  route = path => this.routes.find(r => path.match(r[0]) !== null)?.[1]?.()
  render(){
    return (
      <div>
        {/*<div>title?</div>*/}
        <Header />
        {this.route(this.props.location)}
      </div>
    )
  }
}))
