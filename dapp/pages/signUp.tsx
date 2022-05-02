import React, { useState } from "react";
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Input from "../components/Input";
import Button from '../components/Button';

const SignUp: NextPage = () => {
    let [data, setData] = useState({});
    const getCertificate = async (e: any) => {
        const Ethereum = typeof window !== 'undefined' && (window as any).ethereum;
        if (!Ethereum) {
            alert('No Ethereum wallets found , Please get Metamask');
            return;
        }
        e.preventDefault();
        fetch("http://localhost:9000/getCertificateDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // if (data.status) {
                //     router.push(
                //         { pathname: "/hashData", query: { hashValue: data.hash } },
                //         "hashData"
                //     );
                // }
            })
            .catch((err) => {
                alert(err);
            });
    }
    return (
        <Layout>
            <div className="w-1/3 m-auto p-4">
                <div className='text-center	text-4xl font-bold mb-2'>
                    Certificate Form
                </div>
                <div className='w-3/4 m-auto mt-2'>
                    <Input child={"Enter Name"} type="email" name="Name" setData={setData} />
                    <Input child={"Enter Experience"} type="email" name="Experience" setData={setData} />
                    <Input child={"Enter Joining day"} type="date" name="Joining day" setData={setData} />
                    <Input child={"Enter Last working day"} type="date" name="Last working day" setData={setData} />
                    <Input child={"Enter Position"} type="email" name="Position" setData={setData} />
                    <Input child={"Enter issued by"} type="email" name="issued by" setData={setData} />
                    <Input child={"Enter issued date"} type="date" name="issued date" setData={setData} />
                </div>
                <div className='m-8 p-4'>
                    <Button label='Apply For Certificate' onClick={getCertificate} />
                </div></div>
        </Layout>

    )
}

export default SignUp;
