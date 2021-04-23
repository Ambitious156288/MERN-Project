import React from 'react';

const Owl = ({ inputClass }) => {
  return (
    <>
      <div className={`owl ${inputClass}`}>
        <div className={`hand ${inputClass}`}></div>

        <div className={`hand hand-r ${inputClass}`}></div>

        <div className={`arms ${inputClass}`}>
          <div className={`arm ${inputClass}`}></div>

          <div className={`arm arm-r ${inputClass}`}></div>
        </div>
      </div>
    </>
  );
};

export default Owl;
