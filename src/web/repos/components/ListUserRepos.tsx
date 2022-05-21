import UseUserReposQuery from "../hooks/useUserReposQuery"

type Props = {
  login: string | undefined
}

export const ListUserRepos = ({ login }: Props) => {
  const { list } = UseUserReposQuery({ login })

  console.log(list)
  return (
    <>
      repos
    </>
  )
}