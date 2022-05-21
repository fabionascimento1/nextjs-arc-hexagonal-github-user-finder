import React from 'react'
import UseQuery from '../../web/user/hooks/useUserQuery';

export default function Index() {
  const login = 'fabionascimento1'
  const { getPage, list } = UseQuery({ login })
  console.log(list)
  return (
    <div>
      1
    </div>
  )
}
