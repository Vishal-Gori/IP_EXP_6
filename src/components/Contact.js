import React, { useState } from 'react';
import ThankYou from './Thankyou';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: '',
    });
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true); // Update the isSubmit state to true
        const { name, email } = formData;
        console.log(name, email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <center>
            <h3>Contact Me</h3>
            <br />
            {!isSubmit ? (
                <form id='contact' onSubmit={handleSubmit}>
                        <label>Name:</label><br />
                        <input
                            type='text'
                            placeholder='Enter your name'
                            name='name'
                            className='input'
                            value={formData.name}
                            onChange={handleInputChange} /><br />
                        <label>Email:</label><br />
                        <input
                            type='text'
                            placeholder='Enter your Email'
                            name='email'
                            className='input'
                            value={formData.email}
                            onChange={handleInputChange} /><br />
                        <label>Query:</label><br />
                        <textarea
                            type='text'
                            placeholder='Enter your Query'
                            name='query'
                            className='input'
                            rows={5}
                            value={formData.query}
                            onChange={handleInputChange} /><br />
                        <button id='btn' onClick={handleSubmit}>Submit</button>
                </form>
            ) : (
                <ThankYou name={formData.name} email={formData.email} />
            )}
        </center>
    );
};

export default Contact;








// import React from 'react'
// import { useState } from 'react';
// import ThankYou from './Thankyou';

// const Contact = () => {

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         query: '',
//     });
//     const [isSubmit, setIsSubmit] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmit = true;
//         const { name, email } = formData;
//         console.log(name, email);

//     };


//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     return (
//         <>
//             <center>
//                 <h3>Contact Me</h3>
//                 <br />
//                 {!isSubmit && (
//                     <form id='contact' onSubmit={handleSubmit}>
//                         <label>Name:</label><br />
//                         <input
//                             type='text'
//                             placeholder='Enter your name'
//                             name='name'
//                             className='input'
//                             value={formData.name}
//                             onChange={handleInputChange} /><br />
//                         <label>Email:</label><br />
//                         <input
//                             type='text'
//                             placeholder='Enter your Email'
//                             name='email'
//                             className='input'
//                             value={formData.email}
//                             onChange={handleInputChange} /><br />
//                         <label>Query:</label><br />
//                         <textarea
//                             type='text'
//                             placeholder='Enter your Query'
//                             name='query'
//                             className='input'
//                             rows={5}
//                             value={formData.query}
//                             onChange={handleInputChange} /><br />
//                         <button id='btn' onClick={handleSubmit}>Submit</button>
//                     </form>
//                     ) : (
//                 <ThankYou name={formData.name} email={formData.email} />
//                 ) }
//             </center>
//         </>
//     )
// }

// export default Contact