import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Projects from './components/Projects'
import ProjectPage from './components/ProjectPage'
import './App.css'

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Projects} />
        <Route exact path="/projet/:id" component={ProjectPage} />
      </Fragment>
    </Router>
  )
}

export default App
