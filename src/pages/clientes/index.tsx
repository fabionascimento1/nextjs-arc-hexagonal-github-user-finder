import React from 'react'
import UseQuery from './useQuery';

export default function Index() {
  const { getPage, list } = UseQuery()
  return (
    <div>
      {
        list?.map((item, index) => (
          <div key={index}>{item.nome}</div>
        ))
      }
    </div>
  )
}
