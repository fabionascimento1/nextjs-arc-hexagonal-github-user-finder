import UseUserQuery from "../hooks/useUserQuery"

type Props = {
  login: string | undefined
}

export const ListUser = ({ login }: Props) => {
  const { list } = UseUserQuery({ login })

  console.log(list)
  return (
    <>
      <img src={list?.avatar_url} />
    </>
  )
}