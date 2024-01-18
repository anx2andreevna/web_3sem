import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { Table, Button } from 'antd'; 
import type { ColumnsType } from 'antd/es/table'; 
 
interface DataType { 
  country: string; 
  name: string;  
} 
 
const columns: ColumnsType<DataType> = [ 
  { 
    title: 'Страна', 
    dataIndex: 'country', 
    key: 'country', 
  }, 
  { 
    title: 'Название школы', 
    dataIndex: 'name', 
    key: 'name', 
  }, 
]; 
 
const App = () => { 
  const [page, setPage] = useState<number>(1); 
  const [dataSource, setDataSource] = useState<DataType[]>([]); 
 
  const getUniversity = async (page: number, limit: number) => { 
    try { 
      const response = await axios.get(`http://universities.hipolabs.com/search?offset=${(page - 1) * limit}&limit=${limit}`); 
      setDataSource(response.data); 
    } catch (error) { 
      console.error('Error fetching data:', error); 
    } 
  };   
 
  useEffect(() => { 
    getUniversity(page, 5); 
  }, [page]); 
 
  return ( 
    <> 
      <Table className='table' dataSource={dataSource} columns={columns} pagination={false} /> 
      <div className='wrapper'>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}> 
          Назад 
        </Button> 
        <Button onClick={() => setPage(page + 1)}>Вперед</Button> 
      </div>
    </> 
  ); 
} 
 
export default App;

/*import React from 'react'; 
import { Table, Tag } from 'antd'; 

const { Column } = Table;

  interface DataType { 
    key: string; 
    name: string; 
    age: number; 
    address: string; 
    tags: string[];
  } 
 

  const data: DataType[] = [ 
    { key: '1', name: 'Nanna Christiansen', age: 25, address: 'Street 123', tags: ['nice', 'developer'], }, 
    { key: '2', name: 'Sedef Sarıoğlu', age: 30, address: 'Street 456', tags: ['loser'], }, 
    { key: '3', name: 'Nicoline Christiansen', age: 28, address: 'Avenue 789', tags: ['cool', 'teacher'], }, 
    { key: '4', name: 'Reina Ramírez', age: 35, address: 'Road 321', tags: ['loves avocado'] }, 
    { key: '5', name: 'Ege Başoğlu', age: 22, address: 'Lane 654', tags: ['strange'] }, 
    { key: '6', name: 'Olivia Hokkanen', age: 40, address: 'Boulevard 987', tags: ['partymaker'] }, 
    { key: '7', name: 'Radivoy Zavadovskiy', age: 27, address: 'Way 234', tags: ['fine', 'shine'] }, 
    { key: '8', name: 'William Martinez', age: 33, address: 'Circle 567', tags: ['nice'] }, 
    { key: '9', name: 'Chloe Li', age: 29, address: 'Square 890', tags: ['artist'] }, 
    { key: '10', name: 'Filippo Kehl', age: 26, address: 'Park 432', tags: ['actor']},
  ]; 
  const App: React.FC = () => (
    <Table dataSource={data}>
      
        <Column title="Name" dataIndex="name" key="name" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => (
              <Tag color="green" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
    </Table>
  );
  
 
export default App;*/