import React from 'react'
import { Loginbg } from '../../assets'
import './login.css'

const index = () => {
    return(                   
        <div className='cannot_scroll'>
            <div className='row'>
                <div className='col-md-9 bg-secondary'>
                    <img  src={Loginbg} className="img-fluid mx-auto d-block" alt='register pict' />
                </div>
                <div className=' col-md-3 bg-secondary'>
                    <h3 className='text-light text-center'>Login Needed</h3><hr/>
                    <form>                        
                        <div className="mb-1">
                            <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div><br/>
                        
                        <button type="submit" className=" btn btn-primary d-grid col-12 ">Login Now</button><br/><br/><br/>

                        <a className='text-light' href='/register'> <h6 className='text-center'>Belum punya akun ? daftar disini !</h6></a>
                    </form>
                </div>
            </div>
            
        </div>

    
    )
}

export default index