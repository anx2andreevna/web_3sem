import React from 'react'; 
import { Table } from 'antd'; 
 
function App() { 
  interface IDataItem { 
    key: string; 
    name: string; 
    age: number; 
    address: string; 
  } 
 
 
  const dataSource: IDataItem[] = [ 
    { key: '1', name: 'Nanna Christiansen', age: 25, address: 'Street 123' }, 
    { key: '2', name: 'Sedef Sarıoğlu', age: 30, address: 'Street 456' }, 
    { key: '3', name: 'Nicoline Christiansen', age: 28, address: 'Avenue 789' }, 
    { key: '4', name: 'Reina Ramírez', age: 35, address: 'Road 321' }, 
    { key: '5', name: 'Ege Başoğlu', age: 22, address: 'Lane 654' }, 
    { key: '6', name: 'Olivia Hokkanen', age: 40, address: 'Boulevard 987' }, 
    { key: '7', name: 'Radivoy Zavadovskiy', age: 27, address: 'Way 234' }, 
    { key: '8', name: 'William Martinez', age: 33, address: 'Circle 567' }, 
    { key: '9', name: 'Chloe Li', age: 29, address: 'Square 890' }, 
    { key: '10', name: 'Filippo Kehl', age: 26, address: 'Park 432'}, 
  ]; 
 
  const columns = [ 
    { title: 'Name', dataIndex: 'name', key: 'name' }, 
    { title: 'Age', dataIndex: 'age', key: 'age' }, 
    { title: 'Address', dataIndex: 'address', key: 'address' }, 
  ]; 
  return ( 
    <div> 
      <Table<IDataItem> 
        dataSource={dataSource} 
        columns={columns} 
      /> 
    </div> 
  ); 
 
} 
 
export default App;