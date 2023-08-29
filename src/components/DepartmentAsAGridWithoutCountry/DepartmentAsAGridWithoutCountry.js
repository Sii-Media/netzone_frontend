import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'

const DepartmentAsAGridWithoutCountry = () => {
    const data = useRouteLoaderData("departmentsAsGrid")
    console.log(data)
  return (
    <div>DepartmentAsAGridWithoutCountry</div>
  )
}

export default DepartmentAsAGridWithoutCountry