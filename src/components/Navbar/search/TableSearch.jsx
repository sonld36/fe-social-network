import React, { useState } from 'react';
import ItemSearched from './ItemSearched';
import './search.css'

TableSearch.propTypes = {

};

function TableSearch(props) {
  const {handleCloseTableSearch, users} = props;

  return (
    <div onClick={handleCloseTableSearch}>
      {users.map((user, index) => {
        return (
          <ItemSearched key={index} user={user}/>
        )
      })}
        
    </div>
  );
}

export default TableSearch;