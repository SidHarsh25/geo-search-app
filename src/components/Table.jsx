import React from 'react';

const Table = ({ data, isLoading }) => {
   if (isLoading) return <div className="spinner">Loading...</div>;

   if (!data) return <p>Start searching</p>;

   if (data.length === 0) return <p>No result found</p>;

   return (
       <table className="city-table">
           <thead>
               <tr>
                   <th>#</th>
                   <th>Place Name</th>
                   <th>Country</th>
               </tr>
           </thead>
           <tbody>
               {data.map((item, index) => (
                   <tr key={item.id}>
                       <td>{index + 1}</td>
                       <td>{item.city}</td>
                       <td>
                           <img
                               src={`https://flagsapi.com/${item.countryCode}/flat/24.png`}
                               alt={item.country}
                           />{' '}
                           {item.country}
                       </td>
                   </tr>
               ))}
           </tbody>
       </table>
   );
};

export default Table;
