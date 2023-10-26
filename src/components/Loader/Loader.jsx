import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={s.loaderContainer}>
      <BallTriangle
        className={s.loader}
        height={100}
        width={100}
        radius={5}
        color="#25ef1f"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
