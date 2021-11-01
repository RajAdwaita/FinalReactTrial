import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        msg: ''
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })

    }



    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullName}.My mobile number is ${data.mobile}.`)

    }


    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} action="">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                                <input required type="number" className="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="Mobile" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input required type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary " type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
