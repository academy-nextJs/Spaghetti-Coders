import React from 'react'
import DashboardHeaderLayout from '../../Layout/dashboard/Header'
import HeaderLeft from './HeaderLeft'

export default function DashHeader() {
  return (
    <DashboardHeaderLayout>
        <p className='text-3xl font-bold'>داشبورد</p>
        <HeaderLeft/>
    </DashboardHeaderLayout>
  )
}
