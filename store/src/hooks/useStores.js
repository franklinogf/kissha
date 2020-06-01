import React from 'react'
import { MainContext } from '../contexts/MainContext'

export const useStores = () => {
   const store = React.useContext(MainContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}