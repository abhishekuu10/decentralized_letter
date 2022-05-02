import React, { useEffect } from 'react';
import Dwitter from '../hooks/Dwitter.json';
import { ethers } from 'ethers';

const ContractABI = Dwitter.abi;
const ContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const Ethereum = typeof window !== 'undefined' && (window).ethereum;

const getDwitterContract = () => {
    const provider = new ethers.providers.Web3Provider(Ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(ContractAddress, ContractABI, signer);
}
const useDwitter = () => {
    const [currentAccount, setCurrentAccount] = React.useState('');;
    const connect = async () => {
        try {
            if (!Ethereum) {
                alert('Please install Metamask');
                return;
            }
            const accounts = await Ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length === 0) {
                console.log('No authorized accounts found');
                return;
            }
            const account = accounts[0];
            console.log('Connected to Account', account);
            setCurrentAccount(account);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (!Ethereum) {
            alert('No Ethereum wallets found , Please get Metamask');
            return;
        }
        connect();
    }, [])
    return { connect, account: currentAccount };
}
export default useDwitter;