import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export default () => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}
