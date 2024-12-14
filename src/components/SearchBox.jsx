import React, { useRef } from 'react';

const SearchBox = ({ value, onChange, onSearch }) => {
   const inputRef = useRef(null);

   // Keyboard shortcut for focusing
   React.useEffect(() => {
       const focusSearchBox = (e) => {
           if ((e.ctrlKey || e.metaKey) && e.key === '/') {
               e.preventDefault();
               inputRef.current?.focus();
           }
       };

       window.addEventListener('keydown', focusSearchBox);
       return () => window.removeEventListener('keydown', focusSearchBox);
   }, []);

   return (
       <input
           ref={inputRef}
           type="text"
           value={value}
           onChange={(e) => onChange(e.target.value)}
           onKeyPress={(e) => e.key === 'Enter' && onSearch()}
           placeholder="Search for a city..."
           className="search-box"
       />
   );
};

export default SearchBox;
