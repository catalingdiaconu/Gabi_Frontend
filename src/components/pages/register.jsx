import React,{ useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Nav from '../organisms/nav/nav'

const options = [
    { value: 'producer', label: 'Producer' },
    { value: 'collector', label: 'Collector' },
    { value: 'manufacturer', label: 'Manufacturer' }
]

export default function Register () {

    const [value, setValue] = useState('')
    const defaultValue = options[0].value

    return (
        <div className={'gradient_background_register'}>
            <Nav />
        <form className={'registerForm'}>
            <h3>Register</h3>

            <label htmlFor="companyName">Company Name</label>
            <input type="text" placeholder="Company Name" id="companyName" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" placeholder="Confirm Password" id="confirmPassword" />

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email" />

            <div className={'radioRegister'}>
                <p>VAT payer:</p>
                <input type="radio" id="yesVat" name="vatPayer" value="Yes" />
                <label htmlFor="yesVat">Yes</label>
                <input type="radio" id="noVat" name="vatPayer" value="No" />
                <label htmlFor="noVat">No</label>
            </div>

            <label htmlFor="fiscalIdentificationCode">Fiscal Identification Code</label>
            <input type="text" placeholder="Fiscal Identification Code" id="fiscalIdentificationCode" />

            <label htmlFor="commercialRegistrationNumber">Commercial Registration Number</label>
            <input type="text" placeholder="Commercial Registration Number" id="commercialRegistrationNumber" />

            <label htmlFor="bankAccount">Bank Account</label>
            <input type="text" placeholder="Bank Account" id="bankAccount" />

            <label htmlFor="bank">Bank</label>
            <input type="text" placeholder="Bank" id="bank" />

            <p>Environment Certificate</p>
            <label htmlFor="numberEnvCertificate">Number Environment Certificate</label>
            <input type="text" placeholder="Number Environment Certificate" id="numberEnvCertificate" />
            <label htmlFor="dateEnvCertificate">From Date Environment Certificate</label>
            <input type="date" placeholder="From Date Environment Certificate" id="dateEnvCertificate" />

            <label htmlFor="address">Address</label>
            <input type="text" placeholder="address" id="address" />

            <label htmlFor="city">City</label>
            <input type="text" placeholder="city" id="city" />

            <label htmlFor="county">County</label>
            <input type="text" placeholder="county" id="county" />

            <label htmlFor="nameAdministrator">Administrator name</label>
            <input type="text" placeholder="Administrator name" id="nameAdministrator" />

            <label htmlFor="telephoneNumber">Telephone Number</label>
            <input type="numeric" placeholder="Telephone Number" id="telephoneNumber" />


            <Dropdown options={options} onChange={setValue} value={defaultValue} placeholder="Select an option" />

            <button>Register</button>

            <p>If you do have an account login now!</p>
            <a href="/login">Login here!</a>
        </form>
        </div>
    )
}