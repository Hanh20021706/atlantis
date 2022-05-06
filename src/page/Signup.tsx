import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { signup } from '../api/user';
import { USER_TYPE } from '../types/user';

const Signup = () => {

    const navigate = useNavigate();



    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })
    const onSubmit: SubmitHandler<USER_TYPE> = (data) => {
        const submitData = {
            ...data
    
        }
      
        return handleSubmitUser(submitData);
    }

    const handleSubmitUser = async (data: USER_TYPE) => {
        const response = await signup(data);
        // console.log(response.status)
        // try {
        //     toast.success("dang ky thanh cong", { autoClose: 1000 })
        // } catch (error) {
        //     console.log(error)
        //     toast.warning("dang ky khong thanh cong", { autoClose: 1000 })
        // }
        if (response.status === 200) {
            navigate('/signin')
            toast.success("dang ky thanh cong", { autoClose: 1000 })
        }
    
        
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <section className="probootstrap-section">
                <div className="container" style={{ width: '1170px' }}>
                    <div className="row probootstrap-gutter60">
                        <div className="" style={{ width: '50%', margin: 'auto' }}>
                            <h2 className="mt0">Contact Form</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="probootstrap-form">

                                <div className="form-group">
                                    <label htmlFor="email">Name </label>
                                    <input type="text"
                                        {
                                        ...register('name', {
                                            required: { value: true, message: "khong bo trong" }, minLength: { value: 5, message: "nhap chua du ky tu" }
                                        })
                                        }
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                        {
                                        ...register('email', {
                                            required: { value: true, message: "khong bo trong" }
                                        })
                                        }
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Password</label>
                                    <input type="password"
                                        {
                                        ...register('password', {
                                            required: { value: true, message: "khong bo trong" }
                                        })
                                        }
                                        className="form-control" />
                                </div>


                                <div className="form-group">
                                    <button className="btn btn-primary btn-lg" id="submit" name="submit" defaultValue="Send Message" >
                                        dang ky
                                    </button>
                                   
                                </div>
                                <ToastContainer/>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signup
