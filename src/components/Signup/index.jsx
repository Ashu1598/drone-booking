import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./signup.scss"
import axios from "axios"
import logo from "../../assets/logo-black/M-Drone.png"

const Signup = () => {
  const Navigate = useNavigate()
  const [number, setNumber] = useState("")
  const [showOtpForm, setShowOtpForm] = useState(false)
  const [otp, setOtp] = useState()
  const [showMessage, setShowMessage] = useState(false)
  const [btndisabled, setBtnDisabled] = useState(false)

  const handleClick = () => {
    console.log(number)
    axios
      .post(`http://localhost:8001/mobile`, { number })
      .then((res) => {
        console.log("response", res)
        console.log(res.status)

        if (res.status === 200 && res.data.resp.status === "pending") {
          setShowOtpForm(true)
        }
      })
      //.catch((err) => {})
      .catch((err) => {
        console.error(err.response.data)
      })
  }

  const handleOtp = () => {
    axios
      .post("http://localhost:8001/otp", { otp, number })
      .then((reso) => {
        console.log("response of", reso)

        if (reso.status === 200 && reso.data === "approved") {
          setShowMessage(true)
          setBtnDisabled(true)
          setTimeout(() => {
            setShowMessage(false)
            Navigate("/profile")
          }, 3000)
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
        <div className='col-lg-6 col-md-8 col-sm-10 col-12'>
          <div className='card py-4 px-4'>
            <div className='card-body'>
              {!showOtpForm ? (
                <form className='mt-4'>
                  <div className='text-center mb-4'>
                    <img src={logo} alt='' className='img-fluid mb-5' />
                    <h2>SignUp</h2>
                    <p>You'll receive a 6 digit code to verify next</p>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='number'
                      className='form-control'
                      id='mobileNumber'
                      placeholder='Enter your mobile number'
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                      name='mobileNumber'
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
                      Continue
                    </button>
                  </div>
                </form>
              ) : (
                <form className='mt-4'>
                  <div className='text-center mb-4'>
                    <h2>Verify Mobile Number</h2>
                    <p> Code is sent to {number}</p>
                  </div>
                  <div className='mb-3'>
                    <input
                      type='number'
                      className='form-control'
                      id='otp'
                      name='otp'
                      placeholder='Enter Otp'
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>

                  <div className='d-grid col-6 mx-auto mt-5 mb-3'>
                    <button
                      type='button'
                      onClick={handleOtp}
                      className='btn text-white'
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                      disabled={btndisabled}
                    >
                      Verify
                    </button>
                  </div>
                  <p
                    className={`mt-3 mb-0 fw-bold ${
                      showMessage ? "d-block" : "d-none"
                    }`}
                  >
                    Otp is Verified
                  </p>
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
