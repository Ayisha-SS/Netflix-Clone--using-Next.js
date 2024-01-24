"use client"
import React, { useRef } from 'react'
import Button from '@/app/_component/general/button'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../../lib/firebase/firebase';
import { useRouter } from 'next/navigation';

// export default function SignupFunction() {

//     const router = useRouter();
//     const emailRef = useRef();
//     const passwordRef = useRef();

//     const signup = (e) => {
//         e.preventDefault();
//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;
//         createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert("signup successfully")
//     router.push("/login")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });

//     }


interface SignupFunctionProps {}

const SignupFunction: React.FC<SignupFunctionProps> = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert('Signup successfully');
        router.push('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <div className='max-w-[450px] mx-auto pt-16 '>
        <div className='box-border flex flex-col'>

            <div className='text-3xl font-semibold'>
            <h2>Welcome back! <br/>Joining Netflix is easy.</h2>
            </div>
            {/* <div className='float-left'>
            <p className='font-sans text-sm mt-4'>Enter your email and password</p>
            </div> */}
            <form action="#" className='flex flex-col gap-5 mt-5'
            >
                {/* <input type="text" placeholder='Username...' className='bg-white border rounded pt-4 px-4 h-[50px] text-base placeholder:text-[#8c8c8c]'/> */}
                <input type="email" placeholder='Email...' ref={emailRef} className='bg-white border rounded pt-4 px-4 h-[50px] text-base placeholder:text-[#8c8c8c]'/>
                <input type="password" placeholder='Password...' ref={passwordRef} className='bg-white border rounded pt-4 px-4 h-[50px] text-base placeholder:text-[#8c8c8c]'/>
                
            </form>
                <Button label='Sign Up' className='px-8 py-3 rounded-md mt-5 w-full ' onClick={signup}/>
        </div>
      </div>
    </>
  )
}
export default SignupFunction;