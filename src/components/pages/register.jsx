import React,{useState} from "react";
import Nav from '../organisms/nav/nav';
import Dropdown from 'react-dropdown';

import axios from  'axios'

const options = [
    { value: 'producer', label: 'Producer' },
    { value: 'collector', label: 'Collector' },
    { value: 'manufacturer', label: 'Manufacturer' }
]

export default function Register () {

    const [value, setValue] = useState('')
    const defaultValue = options[0].value

    const [type, setType] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [passwordHash, setPasswordHash] = useState('')
    const [email, setEmail] = useState('')
    const [paysVAT, setPaysVAT] = useState(false)
    const [fiscalIdentificationCode, setFiscalIdentificationCode] = useState('')
    const [commercialRegistrationNumber, setCommercialRegistrationNumber] = useState('')
    const [bankAcc, setBankAcc] = useState('')
    const [bank, setBank] = useState('')
    const [numberEnvironmentCertificate, setNumberEnvironmentCertificate] = useState('')
    const [dateStartEnvironmentCertificate, setDateStartEnvironmentCertificate] = useState('')
    const [address, setAddress] = useState('')
    const [county, setCounty] = useState('')
    const [city, setCity] = useState('')
    const [adminName, setAdminName] = useState('')
    const [phone, setPhone] = useState('')

    const register = () => {
        axios({
            method: 'post',
            data: {
                type: type,
                companyName: companyName,
                passwordHash: passwordHash,
                email: email,
                paysVAT: paysVAT,
                fiscalIdentificationCode: fiscalIdentificationCode,
                commercialRegistrationNumber: commercialRegistrationNumber,
                bankAcc: bankAcc,
                bank: bank,
                numberEnvironmentCertificate: numberEnvironmentCertificate,
                dateStartEnvironmentCertificate: dateStartEnvironmentCertificate,
                address: address,
                county: county,
                city: city,
                adminName: adminName,
                phone: phone,
            },
            withCredentials: true,
            url: 'http://localhost:3000/register'
        })
            .then((res) => console.log(res))
    }

    return (
        <div className={'gradient_background_register'}>
            <Nav />
        <form className={'registerForm'}>
            <h3>Register</h3>

            <label htmlFor="companyName">Company Name</label>
            <input type="text" placeholder="Company Name" id="companyName" onChange={e => setCompanyName(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={e => setPasswordHash(e.target.value)}/>

            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" placeholder="Confirm Password" id="confirmPassword" />

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email" onChange={e => setEmail(e.target.value)}/>

            <div className={'radioRegister'}>
                <p>VAT payer:</p>
                <input type="radio" id="yesVat" name="vatPayer" value="Yes" />
                <label htmlFor="yesVat">Yes</label>
                <input type="radio" id="noVat" name="vatPayer" value="No" />
                <label htmlFor="noVat">No</label>
            </div>

            <label htmlFor="fiscalIdentificationCode">Fiscal Identification Code</label>
            <input type="text" placeholder="Fiscal Identification Code" id="fiscalIdentificationCode" onChange={e => setFiscalIdentificationCode(e.target.value)}/>

            <label htmlFor="commercialRegistrationNumber">Commercial Registration Number</label>
            <input type="text" placeholder="Commercial Registration Number" id="commercialRegistrationNumber" onChange={e => setCommercialRegistrationNumber(e.target.value)}/>

            <label htmlFor="bankAccount">Bank Account</label>
            <input type="text" placeholder="Bank Account" id="bankAccount" onChange={e => setBankAcc(e.target.value)}/>

            <label htmlFor="bank">Bank</label>
            <input type="text" placeholder="Bank" id="bank" />

            <p>Environment Certificate</p>
            <label htmlFor="numberEnvCertificate">Number Environment Certificate</label>
            <input type="text" placeholder="Number Environment Certificate" id="numberEnvCertificate" onChange={e => setNumberEnvironmentCertificate(e.target.value)}/>
            <label htmlFor="dateEnvCertificate">From Date Environment Certificate</label>
            <input type="date" placeholder="From Date Environment Certificate" id="dateEnvCertificate" onChange={e => setDateStartEnvironmentCertificate(e.target.value)}/>

            <label htmlFor="address">Address</label>
            <input type="text" placeholder="address" id="address" onChange={e => setAddress(e.target.value)}/>

            <label htmlFor="nameAdministrator">Name Administrator</label>
            <input type="text" placeholder="Name Administrator" id="nameAdministrator" onChange={e => setAdminName(e.target.value)}/>

            <label htmlFor="city">City</label>
            <input type="text" placeholder="city" id="city" />

            <label htmlFor="county">County</label>
            <input type="text" placeholder="county" id="county" />

            <label htmlFor="telephoneNumber">Telephone Number</label>
            <input type="numeric" placeholder="Telephone Number" id="telephoneNumber" onChange={e => setPhone(e.target.value)}/>


            <Dropdown options={options} onChange={setValue} value={defaultValue} placeholder="Select an option" />

            <button>Register</button>

            <p>If you do have an account login now!</p>
            <a href="/login">Login here!</a>
        </form>
        </div>
    )
}