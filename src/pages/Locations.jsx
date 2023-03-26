import React, { useContext } from 'react'
import { RMcontext } from '../context/context'

export const Locations = () => {
    const { locations} = useContext(RMcontext)
    console.log(locations)
  return (
    <div>Locations</div>
  )
}
