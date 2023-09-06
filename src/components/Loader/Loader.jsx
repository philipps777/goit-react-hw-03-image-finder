import React from 'react';
import { Puff } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderDiv className="loader">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderDiv>
  );
};
