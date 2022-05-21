import { getClientes } from 'core/clientes/services/getClientes'
import { GetClientesResponseDTO } from 'core/clientes/types'
import { FilterBuilder } from 'core/shared/builders';
import React, { useCallback, useEffect, useState } from 'react'


export default function UseQuery() {
  const [query, setQuery] = useState('');
  const [list, setList] = useState<GetClientesResponseDTO>();
  const [loading, setLoading] = useState(true);

  const getPage = useCallback(
    async (offset: number) => {
      const xquery = ['nome', 'email']
      setLoading(true)
      const filterBuilder = new FilterBuilder();
      if(query){
        filterBuilder.like(xquery, query)
      }
        await getClientes({ onSuccess: setList }, { offset }, filterBuilder.dto);
        setLoading(false)
     }, [query])

  useEffect(() => {
    getPage(0)
  }, [query])

  return { getPage, list, loading }
}
