import React from 'react'
import { ShoppingCartStore } from '../stores/ShoppingCartStore'

export const MainContext = React.createContext({
   ShoppingCartStore: new ShoppingCartStore()
})