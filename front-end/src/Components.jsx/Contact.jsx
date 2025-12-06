import React from 'react'
import { Heading } from './Heading'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch("https://shahid-portfolio-vl2h.onrender.com/contact", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent Succefully!");
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                alert("Failed to send Message!");
            }
        }
        catch (error) {
            console.log(error);
            alert('Something Went wrong');
        }
        setIsSubmitting(false);
    };
    return (
        <div className='flex flex-col gap-8 text-white w-full'>
            <div className="flex flex-col gap-6">
                <Heading text='Contact' />
                <span className='text-xl light leading-8'>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </span>
            </div>
            <form className="flex flex-col gap-3 w-full" onSubmit={handlSubmit}>

                <div className="flex items-center gap-3 max-lg:flex-col">
                    <input type="text" className='card-shadow w-full outline-0  rounded-xl light px-8 py-5 focus:border-[#60a5fa]!' placeholder='Enter Your Name' value={formData.name} onChange={handleChange} />
                    <input type="text" className='card-shadow w-full outline-0  rounded-xl light px-8 py-5 focus:border-[#60a5fa]!' placeholder='Enter Your Email' value={formData.email} onChange={handleChange} />
                </div>
                <div className="flex items-stretc gap-3">
                    <textarea type="text" className='card-shadow w-full h-full outline-0  rounded-xl light px-8 py-5 focus:border-[#60a5fa]!' placeholder='Enter Your Message' value={formData.message} onChange={handleChange} />
                </div>
                <button type="text" className='card-shadow w-full outline-0 cursor-pointer rounded-xl light px-8 py-5 hover:border-[#60a5fa]!' placeholder='Enter Your Email ' disabled={isSubmitting} >
                    {isSubmitting ? "Sending..." : "Submit"}
                </button>

            </form>
        </div>
    )
}
