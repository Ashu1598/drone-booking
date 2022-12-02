import React, { useState } from "react"
import "./signup.scss"
import axios from "axios"

const Signup = () => {
  const [number, setNumber] = useState("")
  const [showOtpForm, setShowOtpForm] = useState(false)
  const [otp, setOtp] = useState()
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    axios
      .post(`http://localhost:8001/mobile`, { number })
      .then((res) => {
        console.log("response", res)
        console.log(res.status)

        if (res.status === 200 && res.data.resp.status === "pending") {
          setShowOtpForm(true)
        }
      })
      .catch((err) => {})
  }

  const handleOtp = () => {
    axios
      .post("http://localhost:8001/otp", { otp, number })
      .then((reso) => {
        console.log("response of", reso)

        if (reso.status === 200 && reso.data === "approved") {
          setShowMessage(true)
        }
      })
      .catch((err) => {
        console.log("error otp")
      })
  }

  console.log("number is", number)
  return (
    <div className='container vh-100  d-flex flex-column justify-content-center'>
      <div className='row d-flex justify-content-center align-items-center g-4'>
        <div className='col-lg-4'>
          <div className='card py-4 px-4'>
            <div className='card-body'>
              {!showOtpForm ? (
                <form className='mt-4'>
                  <div className='text-center mb-4'>
                    <h2>SignUp</h2>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='number'
                      className='form-control'
                      id='mobileNumber'
                      placeholder='Enter your mobile number'
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                    />
                  </div>

                  <div className='d-grid col-6 mx-auto mt-5 mb-3'>
                    <button
                      type='button'
                      onClick={handleClick}
                      className='btn text-white btn-lg'
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                <form className='mt-4'>
                  <div className='text-center mb-4'>
                    <p> Enter Otp recieved on your {number}</p>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='number'
                      className='form-control'
                      id='otp'
                      placeholder='Enter Otp'
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>

                  <div className='d-grid col-6 mx-auto mt-5 mb-3'>
                    <button
                      type='button'
                      onClick={handleOtp}
                      className='btn text-white btn-lg'
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Verify Otp
                    </button>
                    <p className={`mt-3 ${showMessage ? "d-block" : "d-none"}`}>
                      Otp is Verified
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
