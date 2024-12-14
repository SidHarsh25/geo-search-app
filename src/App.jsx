import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import Table from './components/Table';
import Pagination from './components/Pagination';
import api from './api';
import { useDebounce } from './hooks/useDebounce';

const App = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [limit, setLimit] = useState(5);
   const debouncedSearchTerm = useDebounce(searchTerm, 500);

   const fetchCities = async () => {
       try {
           setIsLoading(true);
           const response = await api.get('/', {
               params: {
                   namePrefix: debouncedSearchTerm,
                   offset: (currentPage - 1) * limit,
                   limit,
               },
           });
           setData(response.data.data);
       } catch (error) {
           console.error('Error fetching cities:', error);
       } finally {
           setIsLoading(false);
       }
   };

   useEffect(() => {
       if (debouncedSearchTerm) fetchCities();
   }, [debouncedSearchTerm, currentPage, limit]);

   return (
       <div className="app">
           <SearchBox
               value={searchTerm}
               onChange={setSearchTerm}
               onSearch={fetchCities}
           />
           <Table data={data} isLoading={isLoading} />
           {data && data.length > 0 && (
               <Pagination
                   currentPage={currentPage}
                   totalPages={Math.ceil(data.length / limit)}
                   onPageChange={setCurrentPage}
                   onLimitChange={setLimit}
               />
           )}
       </div>
   );
};

export default App;
