import React from 'react'
import Navbar from './Navbar'
import Alerts from './Alerts'

export default function Layout() {
  return (
    <>
    <Navbar title='TextUtils' home="Home" />
    <Alerts/>
    </>
  )
}
