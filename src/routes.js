/**
 * Get a list of all pages from PageDirectory and assign their routes
 */
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import PageDirectory from './pages/PageDirectory'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        {
          Object.keys(PageDirectory).map(key => {
            return (
              <Route
                key={key}
                exact
                path={PageDirectory[key].path}
                component={PageDirectory[key].component}
              />
            )
          })
        }
        <Redirect to={PageDirectory.WELCOME_PAGE.path} />
      </Switch>
    </BrowserRouter>
  )
}
