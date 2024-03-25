import React, { useState } from 'react'

export default function FirstApi() {
    const [useData, setUseData] = useState([])

  return (
    <div>{JSON.stringify(useData)}</div>
  )
}
