
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const page = () => {
            const handleLogin = async ()=>{

            }
            return (
                        <div className='container mx-auto py-24 px-24'>
                                   
                               <div className='grid grid-cols-2 items-center'>
                                    <div>
                                     <Image src="/assets/images/login/login.svg" height="440" width="440" alt='login image'></Image>
                                    </div>
                                    <div className='border-2 p-12'>
                                     <h6 className='text-3xl font-semibold text-center mb-10'>Sign in</h6>
                                     <form onSubmit={handleLogin} action="
                                     ">
                                                <label htmlFor="email">Email</label> <br /> 
                                     <input type="text" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                                     <br /> <br />
                                     <label htmlFor="email">Password</label> 
                                     <br />
                                     <input type="password" name='password' placeholder="Your Password" className="input input-bordered w-full" />
                                     <br />

                                    <button type='submit' className='btn btn-primary w-full mt-8'>Sign in</button>

                                     </form>

                                    
                                     <div>
                                                <h6 className='text-center my-8'>or sign in with</h6>
                                                <div className='flex items-center justify-center space-x-3 '>
                                              <button className='btn text-3xl flex items-center justify-center text-green-500'>  <FaGoogle /></button>
                                              <button className='btn text-3xl  flex items-center justify-center text-primary'>  <FaGithub /></button>
                                                </div>
                                                <h6 className='text-center my-8'>Already have an Account? <Link href={'/login'}>login</Link></h6>
                                     </div>

                                    </div>

                               </div>

                        </div>
            );
};

export default page;