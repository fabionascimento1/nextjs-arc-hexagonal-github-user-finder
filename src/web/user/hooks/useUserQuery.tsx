import { getUser } from 'core/users/services'
import { ListUsersResponseDTO } from 'core/users/types'
import { FilterBuilder } from 'core/shared/builders';
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  login: string | undefined
}

export default function UseUserQuery({ login }: Props) {
  const [query, setQuery] = useState('');
  const [list, setList] = useState<ListUsersResponseDTO>();
  const [loading, setLoading] = useState(true);

  const getPage = useCallback(
    async (offset: number) => {
      setLoading(true)
      const filterBuilder = new FilterBuilder();

      await getUser({ onSuccess: setList }, { login }, filterBuilder.dto);
      setLoading(false)
    }, [query])

  useEffect(() => {
    getPage(0)
  }, [query])

  return { getPage, list, loading }
}
