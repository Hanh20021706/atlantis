import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../api/user';
import { USER_TYPE } from '../types/user';

const Signin = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues:{
            email: '',
            password: '',
            name:''
        }
    })

    const onSubmit:SubmitHandler<USER_TYPE> = (data) => {
        const submitData = {
            ...data
    
        }
      
        return handleSubmitUser(submitData);
    }

    const handleSubmitUser = async (data: USER_TYPE) => {
        const response = await signin(data);
        if(response.status === 200){
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/')
        }
    }


    useEffect(() => {

    }, [])

  return (
    <div>
          <section className="probootstrap-section">
                <div className="container" style={{ width: '1170px' }}>
                    <div className="row probootstrap-gutter60">
                        <div className="" style={{width: '50%', margin: 'auto'}}>
                            <h2 className="mt0">Contact Form</h2>
                            <form  onSubmit={handleSubmit(onSubmit)} className="probootstrap-form">

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    {
                                        ...register('email')
                                    }
                                    className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Password</label>
                                    <input type="password"
                                    {
                                        ...register('password')
                                    }
                                    className="form-control" />
                                </div>


                                <div className="form-group">
                                    <button style={{padding: '5px 30px'}} type="submit" className="btn btn-primary btn-lg" id="submit" name="submit" defaultValue="Send Message" >
                                            dang nhap
                                    </button>
                                  
                                    <Link style={{float: 'right', padding: '20px 0px', color: "blue"}} to={'/signup'}>
                                    registration
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
    </div>
  )
}

export default Signin
