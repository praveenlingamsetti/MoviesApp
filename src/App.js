import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MovieItemDetails from './components/MovieItemDetails'
import Account from './components/Account'
import Popular from './components/Popular'
import Search from './components/Search'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route path="/not-found" component={NotFound} />
    <Route exact path="/movies/:id" component={MovieItemDetails} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <Route exact path="/search" component={Search} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
