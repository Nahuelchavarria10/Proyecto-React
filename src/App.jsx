import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Accounts from './pages/Accounts'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cards from './pages/Cards'
import Transactions from './pages/Transactions'
import Loans from './pages/Loans'
import ApplyCards from './pages/ApplyCards'
import ApplyLoans from './pages/ApplyLoans'
import Login from './pages/Login'
import Movements from './pages/Movements'
import SingUp from './pages/SingUp'
import ApplyAccounts from './pages/ApplyAccounts'
import { withAuth } from './hocs/withAuth'

function App() {

  const MainLayoutWithAuth = withAuth(MainLayout)

  const rutesLogged = [
    {
      path: '/Accounts',  element: Accounts
    },
    {
      path: '/Movements/:id',  element: Movements
    },
    {
      path: '/Cards',  element: Cards
    },
    {
      path: '/Transactions',  element: Transactions 
    },
    {
      path: '/Loans',  element: Loans
    },
    {
      path: '/ApplyCards',  element: ApplyCards
    },
    { 
      path: '/ApplyLoans/:id',  element: ApplyLoans
    },
    {
      path: '/ApplyAccounts',  element: ApplyAccounts
    },
  ]


  return (


    <Routes>

      <Route path='/Login' element={<Login />} />
      <Route path='/SingUp' element={<SingUp />} />
      <Route path='*' element={<Navigate to={'/Login'} />}></Route>

      
      <Route element={<MainLayoutWithAuth />}>

      {
        rutesLogged.map((ruta) => {
          const Page = withAuth(ruta.element)
          return <Route key={ruta.path} path={ruta.path} element={<Page/>}/>
        })
      }

      </Route>

    </Routes>
  )
}

export default App
