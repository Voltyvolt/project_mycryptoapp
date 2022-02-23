/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { Input, Select, Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const options = [
    {
        value: 'eth',
        label: 'ETH',
    },
    {
        value: 'usdc',
        label: 'USDC',
    },
];

const Swap = () => {
    const [tokenState, settokenState] = useState('BNB');

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
            defaultValue="BNB"
            onChange={(e) => {
              const token = e.target.value;
              settokenState(token);
              console.log(token);
            }}
          >
            <option value="eth">BNB</option>
            <option value="usdc">ETH</option>
            <option value="bnb">USDC</option>
            <option value="dai">DAI</option>
          </Select>
        </div>
        <Title level={2} className="heading">{tokenState}</Title>
      </div>
    </>
  );
};

export default Swap;
