"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FloatingLabel from '../components/FloatingLabel';
import FloatingPassword from '../components/FloatingPassword';
import HorizontalLoader from '../components/HorizontalLoader';
import postData from '../postdata';
import Image from 'next/image';
import logo from '../assets/icons/logo.svg';


export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectURL, setRedirectURL] = useState(null);
  const [loader, setLoader] = useState(false);
  const [customStyle, setCustomStyle] = useState({ opacity: '1' });

  var endpoint = 'signup';
  var responsePromise;
  var url = 'https://iyanu.pythonanywhere.com/api/';

  useEffect(() => {
    if (redirectURL && email !== '') {
      router.push(redirectURL, undefined, { shallow: true });
    }
  }, [router, redirectURL, email]);

  function handleClick(event) {
    if (email === '' || password === '') {
      event.preventDefault();
      return;
    }
    setLoader(true);
    setCustomStyle({ opacity: '0.65' });

    var formData = {
      email: email,
      password: password,
    };

    responsePromise = postData(url, endpoint, formData);

    responsePromise
      .then((response) => {
        console.log('Response:', response);
        if (response.message === 'signup successful') {
          setRedirectURL(response.redirectURL);
        } else if (response.redirectURL !== null) {
          setRedirectURL(response.redirectURL);
        }
      })
      .catch((error) => {
        setLoader(false);
        setCustomStyle({ opacity: '1' });
        console.error('Error:', error);
      });

    event.preventDefault();
  }

  return (
    <>
      {loader && <HorizontalLoader />}
      <div className="form-container">
        <form className="loginform" style={customStyle}>
          <Image className="logo" src={logo} alt="logo" />
          <h1 className="heading">Create your account</h1>
          <FloatingLabel
            className="form-control"
            value={email}
            label="Email address"
            type="email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <FloatingPassword
            value={password}
            label="Password"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className="mt-5 mb-10 submit" type="submit" onClick={handleClick}>
            Continue
          </button>
          <small className="t-center mt-10">
            Already have an account?
            <Link href="/login">
            <span> Log in</span>
            </Link>
            
          </small>
        </form>
      </div>
    </>
  );
}
