  import { useState } from 'react'
  import MainLayout from './layouts/MainLayout'
  import Home from './pages/Home'
  import Accounts from './pages/Accounts'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Cards from './pages/Cards'
  import Transactions from './pages/Transactions'
  import Loans from './pages/Loans'
  import Error404 from './pages/Error404'
  import ApplyCards from './pages/ApplyCards'
  import ApplyLoans from './pages/ApplyLoans'

  function App() {

    return (
      <BrowserRouter>
        {/* <Login /> */}
        <MainLayout>

          <Routes>
            <Route path='/Accounts' element={<Accounts/>} />
            <Route path='/Cards' element={<Cards/>} />
            <Route path='/ApplyCards/' element= {<ApplyCards/>} />
            <Route path='/Transactions' element={<Transactions/>} />
            <Route path='/Loans' element={<Loans/>} />
            <Route path='/ApplyLoans/:id' element= {<ApplyLoans/>} />
            <Route path='*' element={<Error404/>} />
          </Routes>

        </MainLayout>
      </BrowserRouter>
    )
  }

  export default App
