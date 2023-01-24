import React, { useEffect, useState } from 'react'

const useHeader = (data: any) => {

  const [header, setHeader] = useState<String>("")
  
  useEffect(() => {
    loadPageHeader(data)
  }, [data])

  const loadPageHeader = (header: string) => {
    setHeader(header)
  }

  return {header}
}

export default useHeader