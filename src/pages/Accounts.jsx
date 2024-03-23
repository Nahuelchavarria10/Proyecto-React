    import { useEffect } from 'react';
    import Account from '../components/Account'
    import axios from 'axios';
    import { useDispatch, useSelector } from 'react-redux';
    import authActions from '../redux/actions/auth.actions'
    import { Link } from 'react-router-dom';

    const Accounts = () => {
        const user = useSelector((store) => store.authReducer.user);
        const token = localStorage.getItem('token');
        const dispatch = useDispatch();
        const { current } = authActions;
        
        //get clients/current
        useEffect(() => {
            if (!user.loggedIn && !!token) {
                axios.get(`/api/clients/current`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(res => {
                        console.log(res.data);
                        dispatch(current(res.data))
                    })
            }
        }, [])

        return (
            <main className='flex flex-col items-center gap-5'>
                <h1 className='text-3xl font-thin'>Accounts</h1>
                <div className='flex flex-wrap justify-around gap-y-5 lg:gap-10 items-center'>
                    {
                        user.accounts?.map(account => <Account key={account.id} account={account} />)
                    }
                </div>
                <article className='bg-apply self-center w-64 text-center text-black p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <Link to={`/ApplyAccounts/`} className='text-xl'>Apply Account</Link>
                </article>
            </main>
        )
    }

    export default Accounts