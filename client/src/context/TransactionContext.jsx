import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.provider.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract,
    });
};

export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setconnectedAccount] = useState('');
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const checkIfWalletConnected = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setconnectedAccount(accounts[0]);

                //getAllTransactions();
            } else {
                console.log('No account founds');
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }


    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts', });

            setconnectedAccount(accounts[0]);
            window.location.reload();

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask");

            const { addressTo, amount, keyword, message } = formData;
            getEthereumContract();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}