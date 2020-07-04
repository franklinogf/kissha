import React from "react"
import { Router } from "@reach/router"
import AuthorizationFilter from '../components/Protected/AuthorizationFilter'
import SignUpPage from '../components/Protected/SignUpPage'
import LoginPage from '../components/Protected/LoginPage'
import Dashboard from '../components/Protected/Dashboard'

const user = () => (
    
      <Router>
      <AuthorizationFilter path="/user/dashboard" component={Dashboard} redirectTo='/user/login' withUser />
      <AuthorizationFilter path="/user/login" component={LoginPage} redirectTo='/user/dashboard' withUser={false} />
      <AuthorizationFilter path="/user/signup" component={SignUpPage} redirectTo='/user/dashboard' withUser={false} />
      </Router>
    
  )
  export default user