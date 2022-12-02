import React from "react"
import "./signup.scss"

const Signup = () => {
  return (
    <div className='container vh-100  d-flex flex-column justify-content-center'>
      <div className='row d-flex justify-content-center align-items-center g-4'>
        <div className='col-lg-4'>
          <div className='card py-4 px-4'>
            <div className='text-center'>
              <h2>SignUp</h2>
              <p className='info-text'>Please enter your mobile number</p>
            </div>

            <form className='mt-4'>
              <div className='mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='adminEmail'
                  placeholder='Enter Your Mobile No'
                  name='mobileno'
                />

                <div className='invalid-feedback'>Please enter email.</div>
              </div>

              <div className='d-grid col-6 mx-auto mt-5 mb-3'>
                <button
                  type='submit'
                  className='btn text-white '
                  style={{
                    backgroundColor: "#EE6F1B",
                    borderColor: "#EE6F1B",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
