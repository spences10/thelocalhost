import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import styled from 'styled-components'
import { Layout } from '../components/Layout'

export default () => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Layout />
    </>
  )
}
