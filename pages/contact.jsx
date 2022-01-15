import { useState } from 'react';
import Head from 'next/head';

import axios from 'axios';

import Container from 'components/common/Container';

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: `https://formspree.io/f/mwkyvlqy`, // Not at all secure. But who are we? The fucking CIA?
      data: inputs
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <Head>
        <title>Contact || The Automation and Robotics Club</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Container>
        <div className='mt-24 max-w-lg mx-auto'>
          <h1 className='text-5xl font-semibold'>Contact Us!</h1>

          <form className='w-full mt-16' onSubmit={handleOnSubmit}>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                  htmlFor='firstName'
                >
                  First Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-800 text-gray-200 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                  id='firstName'
                  type='text'
                  onChange={handleOnChange}
                  required
                  value={inputs.firstName}
                />
                {/* <p className=' italic'>
                  Please fill out this field.
                </p> */}
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                  htmlFor='lastName'
                >
                  Last Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-800 text-gray-200 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                  id='lastName'
                  type='text'
                  onChange={handleOnChange}
                  required
                  value={inputs.lastName}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='appearance-none block w-full bg-gray-800 text-gray-200 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                  id='email'
                  type='email'
                  name='_replyto'
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  className='appearance-none block w-full bg-gray-800 text-gray-200 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                  id='message'
                  name='message'
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
              </div>
            </div>
            <div className='flex flex-wrap mb-6'>
              <button
                className='bg-rose-500 py-3 px-8 rounded hover:bg-rose-600 transition-colors'
                type='submit'
                disabled={status.submitting}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </div>
          </form>
          {status.info.error && (
            <div className='text-rose-500 text-sm'>
              Error: {status.info.msg}
            </div>
          )}
          {!status.info.error && status.info.msg && (
            <div className='text-gray-300 text-sm'>{status.info.msg}</div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Contact;
