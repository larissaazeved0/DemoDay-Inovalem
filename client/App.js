import  { AuthContext } from './helpers/AuthContext';
import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Landing } from './paginas/landing-page/landing/Landing';
import Precificacao from './paginas/precificacao/Precificacao';
import Cadastro from './paginas/login/cadastre/Cadastro';
import Login from './paginas/login/log/Login';
import Logout from './paginas/logout/logout'
import Produto from './paginas/produtos/Produto';
import Home from './paginas/home/pages/homePage/Home';
import { Workshop } from './paginas/paraElas/workshop/Workshop';
import { Infantil } from './paginas/paraElas/infantil/infantil';

import { Filtragem } from './paginas/filtragem/FiltragemPerfis';
import { Educacao } from './paginas/educacao/pagesEd/Educacao';
import { Foodtruck } from './paginas/educacao/pagesEd/Foodtruck';
import { Confeitaria } from './paginas/educacao/pagesEd/Confeitaria';
import { Comidas } from './paginas/educacao/pagesEd/Comidas';
import { Panificacao } from './paginas/educacao/pagesEd/Panificação';
import { Mei } from './paginas/educacao/pagesMei/Mei';
import { Gestao } from './paginas/educacao/pagesMei/GestaoF';
import { Marketing } from './paginas/educacao/pagesMei/Marketing';



function App({ item }) {

  console.log(item)

  const [ authState, setAuthState ] = useState({email: "", id: 0, status: false})

  useEffect(() => {
    axios.get('http://localhost:9000/login/auth', {headers: {
      accessToken: localStorage.getItem('accessToken'),
    }}).then((response) => {
      if (response.data.error) {
        setAuthState({...authState, status:false})
      } else {
        setAuthState({       
          email: response.data.email,
          id: response.data.id, 
          status: true})
        }
      })
  }, []);  

  return (
    <>
      <AuthContext.Provider value={{authState, setAuthState}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/educacao' element={<Educacao />} />
            <Route path={'/precificacao/:id'} element={<Precificacao />} />
            <Route path='/produtos' element={<Produto />} />
            <Route path='/filtragem' element={<Filtragem />} />
            <Route path='/workshop' element={<Workshop />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/infantil' element={<Infantil />} />

            <Route path='/'>
              <Route path='/home' element={<Home />} />
              <Route path='users'>
              </Route>
              <Route path='products'>
              </Route>
            </Route>

            <Route path='/'>
              <Route path='/Foodtruck' element={<Foodtruck />} />
              <Route path='/Confeitaria' element={<Confeitaria />} />
              <Route path='/Comidas' element={<Comidas />} />
              <Route path='/Panificacao' element={<Panificacao />} />
              <Route path='/Meis'
                element={<Mei />} />
              <Route path='/GestaoFinaceira'
                element={<Gestao />} />
              <Route path='/MarketingDigital'
                element={<Marketing />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;