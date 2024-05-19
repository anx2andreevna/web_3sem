import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import DynamicPagination from '../../pages/Pagination/Pagination';
import Masha from '../../pages/Masha/Masha';
import Vlad from '../../pages/Vlad/Vlad';
import TablePagination from '../../pages/TablePagination/TablePagination';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<Home/>} />
      <Route path="dynamic_pagination" element={<DynamicPagination/>} />
      <Route path="masha" element={<Masha/>} />
      <Route path='vlad' element={<Vlad/>} />
      <Route path='table_pagination' element={<TablePagination/>} />
    </Routes>
  );
};

export default MainRouter;