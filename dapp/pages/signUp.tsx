import React, { useState } from "react";
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Input from "../components/Input";
import Button from '../components/Button';
import jsPDF from "jspdf";

const SignUp: NextPage = () => {
    let [data, setData] = useState({});
    const pdfGenerate = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addPage()
        doc.setFont('Helvertica', 'bold')
        doc.text(66, 68, 'Name')
        doc.text(60, 80, 'Email')
        doc.text(60, 100, 'Mob. No.')
        doc.setFont('Helvertica', 'Normal')
        doc.text(100, 60, 'ABC')
        doc.text(100, 80, 'abc@gmail.com')

        doc.save('a.pdf')
    }

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
                    <Button label="Generate PDF" onClick={pdfGenerate} marginTop={5} />
                </div></div>
        </Layout>

    )
}

export default SignUp;
