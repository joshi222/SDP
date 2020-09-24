import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    branch: '',
    sem: '',
    email: '',
    password: '',
    password2: '',
    stuId: '',
    clg: '',
    contact: '',
  });

  const {
    firstname,
    lastname,
    branch,
    sem,
    email,
    password,
    password2,
    stuId,
    clg,
    contact,
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log('SUCCESS');
    }
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='FirstName'
            name='firstname'
            required
          />
        </div>
        <div className='form-group'>
          <input type='text' placeholder='LastName' name='lastname' required />
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Branch' name='branch' required />
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Semester' name='sem' required />
        </div>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='8'
          />
        </div>
        <div class='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='8'
          />
        </div>

        <div className='form-group'>
          <input type='text' placeholder='StudentId' name='stuId' required />
        </div>
        <div className='form-group'>
          <input type='text' placeholder='College' name='clg' required />
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Contact' name='contact' required />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};
export default Register;
