import React from 'react'
import useHeader from '../hooks/useHeader'

function Home() {
  
  const {header} = useHeader("Home")
  
  return (
    <div className="text-red-400 text-4xl flex justify-center items-center h-[100vh] text-center">
      This the {header} Page
    </div>
  )
}

export default Home