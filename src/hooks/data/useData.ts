import { useQuery, gql } from '@apollo/client';

 
export const useData = (query, params) =>{

  const { loading, error, data } = useQuery( query, params);
  return { loading, error, data }
  


}