import Account from '../components/Account'
import { useAxios } from '../useAxios'
import { useAxiosPost } from '../useAxiosPost';

const Accounts = () => {
    const { data, loading, error } = useAxios(`http://localhost:8080/api/clients/1`)

    /* const { error2 } = useAxiosPost(`http://localhost:8080/api/clients/${id}`) */

    return (
        <main className='flex justify-center flex-wrap gap-10 px-10'>
            {
                data.accounts?.map(account => <Account key={account.id} account={account} />)
            }
            {error && <h1 className='text-4xl absolute'>Error: {error}</h1>}
            {loading && <li>Loading</li>}
        </main>
    )
}

export default Accounts