import React from 'react'; 
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
  
 
export default App;