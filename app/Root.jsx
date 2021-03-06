import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NotFound from './features/NotFoundPage'
import ContextProvider from '../ContextProvider'
import Home from './features/OtherPages/home'
import About from './features/OtherPages/about'
import Help from './features/OtherPages/help'
import See from './features/see-and-smell'
import Language from './features/OtherPages/language'
import Footer from './features/BottomSide/Footer'
import Nav from './features/TopSide/NavBar'
import {Helmet} from 'react-helmet'
const Root = ({ store, Router, location, context }) => (

  <Provider store={store}>
    <Router location={location} context={context}>
      <ContextProvider context={context}>
        <div>
          <Helmet>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <html lang='en' />
            <html dir='ltr' />
            <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBnk7smY3mIjOQ3KQF1Ntb7hWrgwqoZ0Hw'  />
          </Helmet>
          <Nav />
          <main role='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/language' component={Language} />
              <Route exact path='/help' component={Help} />
              <Route exact path='/see-and-smell' component={See} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  Router: PropTypes.func.isRequired
}

export default Root
