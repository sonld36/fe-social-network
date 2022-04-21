import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

Loading.propTypes = {

};

function Loading(props) {
  
  return (
    <div className='loading-style'>
        <CircularProgress style={{opacity:"1", width: "60px", height: "60px"}}/>
      </div>
  );
}

export default Loading;