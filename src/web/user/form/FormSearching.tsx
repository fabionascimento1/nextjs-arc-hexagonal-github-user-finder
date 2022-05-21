import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export const FormSearching = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const onSubmit = data => {
        router.push(`/user/${data.login}`)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('login')} />
            <button type="submit">Buscar por usuário</button>
        </form>
    )
}