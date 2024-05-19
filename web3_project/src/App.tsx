import React from 'react';
import MainRouter from './app/routes';
import Navbar from './components/Navbar';
import GeneratePdfForm from './components/GeneratePdfForm';

const App = () => {
  return (
    <>
      <Navbar/>
      <MainRouter />
      <h1>Генерация PDF файла</h1>
      <GeneratePdfForm />
    </>

  )
}

export default App;
