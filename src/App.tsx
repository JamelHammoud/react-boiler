import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ROUTES from './router'
import './App.css'

import { Component } from './components/Component'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.App.home} component={Component} />
      </Switch>
    </Router>
  )
}
