import React, { useState } from "react"

const Profile = () => {
  const [showRole, setShowRole] = useState()

  const handleRoleChange = (event) => {
    event.preventDefault()
    setShowRole(event.target.value)
  }
  return (
    <div className='wrapper'>
      <div className='container mt-5  d-flex flex-column justify-content-center'>
        <div className='row d-flex justify-content-center align-items-center g-4'>
          <div className='col-lg-8 '>
            <div className='card shadow pt-2 pb-4'>
              <div
                className='card-header text-center mb-3'
                style={{ background: 0 }}
              >
                <h2>Profile</h2>
              </div>
              <div className='card-body'>
                <form className='row g-3'>
                  <div className='col-md-4'>
                    <label htmlFor='fullName' className='form-label'>
                      Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      name='fullName'
                      id='fullName'
                      placeholder='Enter Your Name'
                    />
                  </div>
                  <div className='col-md-4'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Enter Your Email '
                      id='email'
                    />
                  </div>
                  <div className='col-md-4'>
                    <label htmlFor='mobileNumber' className='form-label'>
                      Mobile Number
                    </label>
                    <input
                      type='number'
                      name='mobileNumber'
                      className='form-control'
                      placeholder='Enter Your Mobile Number '
                      id='mobileNumber'
                    />
                  </div>
                  <div className='col-md-4'>
                    <label className='form-label' htmlFor='role'>
                      Select Role
                    </label>
                    <select
                      className='form-select'
                      name='role'
                      id='role'
                      onChange={handleRoleChange}
                      value={showRole}
                    >
                      <option value='default'>Select Role</option>
                      <option value='Owner'>Owner</option>
                      <option value='Pilot'>Pilot</option>
                      <option value='User'>User</option>
                    </select>
                  </div>

                  {showRole === "Owner" ? (
                    <>
                      <div className='col-lg-12 mt-5'>
                        <h3>Drone Details</h3>
                      </div>
                      <div className='col-md-4'>
                        <label className='form-label' htmlFor='droneType'>
                          Drone Type
                        </label>
                        <select
                          className='form-select'
                          name='droneType'
                          id='droneType'
                        >
                          <option value='default'>Select Drone Type</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                        </select>
                      </div>
                      <div className='col-md-4'>
                        <label className='form-label' htmlFor='batterySets'>
                          Total Battery Sets
                        </label>
                        <select
                          className='form-select'
                          name='batterySets'
                          id='batterySets'
                        >
                          <option value='default'>Select batter Sets</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                        </select>
                      </div>
                      <div className='col-md-4'>
                        <label htmlFor='uinNumber' className='form-label'>
                          UIN Number
                        </label>
                        <input
                          type='number'
                          name='uinNumber'
                          className='form-control'
                          placeholder='Enter Your UIN Number '
                          id='uinNumber'
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {showRole === "User" ? (
                    <>
                      <div className='col-md-4'>
                        <label htmlFor='address' className='form-label'>
                          Address
                        </label>
                        <input
                          type='address'
                          name='address'
                          className='form-control'
                          placeholder='Enter Your Address '
                          id='address'
                        />
                      </div>
                      <div className='col-md-4'>
                        <label htmlFor='land' className='form-label'>
                          Operative Land (in Acres)
                        </label>
                        <input
                          type='text'
                          name='land'
                          className='form-control'
                          placeholder='Enter Your Land Details '
                          id='land'
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {showRole === "Pilot" ? (
                    <>
                      <div className='col-md-4'>
                        <label htmlFor='license' className='form-label'>
                          Drone Operator License / Certification
                        </label>
                        <input
                          type='text'
                          name='license'
                          className='form-control'
                          placeholder='Enter Your License/ Certification '
                          id='license'
                        />
                      </div>
                      <div className='col-md-4'>
                        <label htmlFor='exp' className='form-label'>
                          Experience (in Years)
                        </label>
                        <input
                          type='text'
                          name='exp'
                          className='form-control'
                          placeholder='Enter Your Land Details '
                          id='exp'
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <div className='mt-5 mb-3 text-end'>
                    <button
                      className='btn text-white'
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
      </div>
    </div>
  )
}

export default Profile
