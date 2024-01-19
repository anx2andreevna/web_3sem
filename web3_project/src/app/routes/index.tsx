import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Artem from '../../pages/Artem/Artem';
import Masha from '../../pages/Masha/Masha';
import Vlad from '../../pages/Vlad/Vlad';
import TablePagination from '../../pages/TablePagination/TablePagination';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="artem" element={<Artem/>} />
      <Route path="masha" element={<Masha/>} />
      <Route path='vlad' element={<Vlad/>} />
      <Route path='table_pagination' element={<TablePagination/>} />
    </Routes>
  );
};

export default MainRouter;