import React from "react";
import Nav from '../organisms/nav/nav'

export default function Register () {
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

            <p>Environment Certificate</p>
            <label htmlFor="numberEnvCertificate">Number Environment Certificate</label>
            <input type="text" placeholder="Number Environment Certificate" id="numberEnvCertificate" />
            <label htmlFor="dateEnvCertificate">From Date Environment Certificate</label>
            <input type="date" placeholder="From Date Environment Certificate" id="dateEnvCertificate" />

            <label htmlFor="address">Address</label>
            <input type="text" placeholder="address" id="address" />

            <label htmlFor="nameAdministrator">Name Administrator</label>
            <input type="text" placeholder="Name Administrator" id="nameAdministrator" />

            <label htmlFor="telephoneNumber">Telephone Number</label>
            <input type="numeric" placeholder="Telephone Number" id="telephoneNumber" />

            <button>Register</button>

            <p>If you do have an account login now!</p>
            <a href="/login">Login here!</a>
        </form>
        </div>
    )
}