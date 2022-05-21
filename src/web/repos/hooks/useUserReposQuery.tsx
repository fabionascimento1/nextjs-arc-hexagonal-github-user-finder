import { getRepos } from 'core/repos/services'
import { UserReposReponseDTO } from 'core/repos/types'
import { FilterBuilder } from 'core/shared/builders';
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  login: string | undefined
}

export default function UseUserReposQuery({ login }: Props) {
  const [query, setQuery] = useState('');
  const [list, setList] = useState<UserReposReponseDTO>();
  const [loading, setLoading] = useState(true);

  const getPage = useCallback(
    async (offset: number) => {
      setLoading(true)
      const filterBuilder = new FilterBuilder();

      await getRepos({ onSuccess: setList }, { login, offset }, filterBuilder.dto);
      setLoading(false)
    }, [query])

  useEffect(() => {
    getPage(0)
  }, [query])

  return { getPage, list, loading }
}
