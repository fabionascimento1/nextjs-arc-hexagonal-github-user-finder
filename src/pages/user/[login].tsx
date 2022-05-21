import { useRouter } from 'next/router';
import React from 'react'
import { ListUserRepos } from 'web/repos/components/ListUserRepos';
import { ListUser } from 'web/user/components/ListUser';

export default function Index() {
  const router = useRouter()
  const { login } = router.query

  return (
    <>
      <ListUser login={login} />
      <ListUserRepos login={login} />
    </>
  )
}
