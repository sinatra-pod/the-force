import { useEffect, useState } from 'react'

/*
    1. Define the header state
    2. Method or func to update the header state
    3. Create a func to be executed on every page render
    4. Return the current page visited
*/

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