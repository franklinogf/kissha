import React from 'react'
import { ShoppingCartStore } from '../stores/ShoppingCartStore'
import { UserStore } from '../stores/UserStore'

export const MainContext = React.createContext({
   ShoppingCartStore: new ShoppingCartStore(),
   UserStore: new UserStore()
})