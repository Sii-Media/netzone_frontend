import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'

const DepartmentAsAGridWithoutCountry = () => {
    const data = useRouteLoaderData("departmentsAsGrid")
  return (
    <div>DepartmentAsAGridWithoutCountry</div>
  )
}

export default DepartmentAsAGridWithoutCountry