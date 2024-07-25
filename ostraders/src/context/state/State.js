'use client'
import React, { Children, useState } from 'react'
import StateContext from './StateContext'

const State = ({children}) => {

  const [modelOpen, setModelOpen] = useState(false);
  const [detailModel, setDetailModel ] = useState(false);
  
  const [product2Id, setproduct2Id] = useState(1);
  const [category, setCategory] = useState(null);

  return (
    <StateContext.Provider value={{modelOpen, setModelOpen, product2Id, setproduct2Id ,category, setCategory, detailModel, setDetailModel}}>
      {children}
    </StateContext.Provider>
  )
}

export default State
