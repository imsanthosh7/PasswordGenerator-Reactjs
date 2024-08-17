import React, { useState } from 'react'
import icon from '../assets/copy.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function PasswordGenerator() {
    const [length, Setlenght] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includelowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');


    const generatePassword = () => {
        let charset = '';

        if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includelowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "1234567890";
        if (includeSymbols) charset += "!@#$%^&*()_-+={}[]|:;<>.?/~°";

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }

        setPassword(generatedPassword);

    }


    // passwordCopy
    const copyToClipbord = () => {

        if (password !== "") {
            navigator.clipboard.writeText(password);
            // alert message 
            toast.success(`🔐Password Copied: ${password}`);
        }
    }

    return (
        <>
            <div className='w-full bg-yellow-50 rounded-lg py-1'>
                <div className='border-b-2 border-gray-300 w-full'>
                    <h1 className='text-2xl p-3'>Password Generator</h1>
                </div>
                <div className='flex flex-row border-2 border-gray-300 justify-between py-2 px-3 m-5 rounded-lg'>
                    <input
                        type="text"
                        value={password}
                        className='border-none text-gray-600 text-lg outline-none bg-yellow-50 w-60'
                    />
                    <img className='w-8 cursor-pointer hover:scale-110 duration-150'
                        src={icon}
                        alt="copyicon"
                        onClick={copyToClipbord} />
                </div>
                <div className='m-5 flex justify-start  gap-3'>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={length}
                        onChange={(e) => { Setlenght(e.target.value) }}
                        className='w-full input-range'
                    />
                    <p className='text-lg font-semibold text-gray-700'>{length}</p>
                </div>
                <div className='flex flex-col justify-start gap-2 m-5'>
                    <div>
                        <input
                            type="checkbox"
                            id='upper'
                            checked={includeUppercase}
                            onChange={(e) => setIncludeUppercase(e.target.checked)}
                        />
                        <label
                            htmlFor="upper"
                            className='ml-2 text-lg text-gray-800'>
                            lnclude Uppercase
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id='lowercase'
                            checked={includelowercase}
                            onChange={(e) => setIncludeLowercase(e.target.checked)}
                        />
                        <label
                            htmlFor="lowercase"
                            className='ml-2 text-lg text-gray-800'>
                            lnclude Lowercase
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id='number'
                            checked={includeNumbers}
                            onChange={(e) => setIncludeNumbers(e.target.checked)}
                        />
                        <label
                            htmlFor="number"
                            className='ml-2 text-lg text-gray-800'>
                            lnclude Numbers
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id='symbol'
                            checked={includeSymbols}
                            onChange={(e) => setIncludeSymbols(e.target.checked)}
                        />
                        <label
                            htmlFor="symbol"
                            className='ml-2 text-lg text-gray-800'>
                            lnclude Symbol
                        </label>
                    </div>
                </div>
                <div className='m-5'>
                    <button
                        onClick={generatePassword}
                        className='w-full bg-violet-400 p-3 rounded-lg font-semibold text-lg text-white btn'>
                        Generator Password
                    </button>
                </div>
            </div>
            <ToastContainer position="top-right" />
        </>
    )
}

export default PasswordGenerator