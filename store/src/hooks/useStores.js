import React from 'react'
import { MainContext } from '../contexts/MainContext'

const useStores = () => {
   const store = React.useContext(MainContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}

export default useStores