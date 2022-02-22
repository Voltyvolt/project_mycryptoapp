/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';

const Transactions = () => {
    const { connectAccount } = useContext(TransactionContext);
  return (
    <div className="null">
      <div className="null">
        Transactions
      </div>
    </div>

  );
};

export default Transactions;
