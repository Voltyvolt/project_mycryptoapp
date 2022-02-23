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
    const [tokenState, settokenState] = useState({ value: 'eth', label: 'ETH' });

    const [handleChange] = useState(() => {
        return () => {
            settokenState(tokenState);
        };
      });

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
          >
            <Option value="eth">BNB</Option>
            <Option value="usdc">ETH</Option>
            <Option value="bnb">USDC</Option>
            <Option value="dai">DAI</Option>
          </Select>
        </div>
        <Title level={2} className="heading">{tokenState}</Title>
      </div>
    </>
  );
};

export default Swap;
