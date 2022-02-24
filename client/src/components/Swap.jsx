/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { Input, Typography } from 'antd';
import Select from 'react-select';

const { Title } = Typography;

const optionsList = [
    {
        value: 'eth',
        label: 'ETH',
    },
    {
        value: 'usdc',
        label: 'USDC',
    },
    {
      value: 'bnb',
      label: 'BNB',
  },
];

const Swap = () => {
    const [tokenState, settokenState] = useState(optionsList.value);

    const handleChange = (e) => {
      settokenState(e.value);
      console.log(tokenState);
    };

  return (
    <>
      <div className="container">
        <Title level={2} className="heading">Swap Token</Title>
      </div>
      <div className="container">
        <div className="container-center-cardswap">
          <Input placeholder="Amount" size="large" style={{ width: 'auto' }} />
          <Select
            placeholder="Choose Your Token"
            size="large"
            onChange={handleChange}
            options={optionsList}
          />
        </div>
        <Title level={2} className="heading">Token : {tokenState}</Title>
      </div>
    </>
  );
};

export default Swap;
