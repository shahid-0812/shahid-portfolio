import React, { useEffect } from 'react'
import "../Styles/underdev.css"
import { useNavigate } from 'react-router-dom';

const Underdev = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/")
        }, 2000);
    })


    return (
        <div className='underdev'
        >
            <h1>
                Under Development
            </h1>
        </div>
    )
}

export default Underdev
