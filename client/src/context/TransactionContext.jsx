/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
};

export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setconnectedAccount] = useState('');
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [isLoading, setisLoading] = useState(false);
    const [transactionCount, settransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const checkIfWalletConnected = async () => {
        try {
            if (!ethereum) return alert('Please install Metamask');

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setconnectedAccount(accounts[0]);

                // getAllTransactions();
            } else {
                console.log('No account founds');
            }
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object');
        }
    };

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install Metamask');

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setconnectedAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object');
        }
    };

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('Please install Metamask');

            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccount,
                    to: addressTo,
                    gas: '0x10C8E0', // 1100000 GWEI หรือ 0.0011 BNB (13 บาท)
                    value: parsedAmount._hex, // 0.00001
                }],
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            setisLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setisLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            settransactionCount(transactionCount.toNumber());
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object');
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    return (
      <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, setFormData, handleChange, sendTransaction }}>
        {children}
      </TransactionContext.Provider>
    );
};
