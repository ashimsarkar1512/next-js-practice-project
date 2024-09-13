import Link from 'next/link';
import Image from 'next/image';  
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
            const navItems=[
                        {
                                    title:"Home",
                                    path:"/"
                        },
                        {
                                    title:"About",
                                    path:"/about"
                        },
                        {
                                    title:"Services",
                                    path:"/services"
                        },
                        {
                                    title:"Blog",
                                    path:"/blog"
                        },
                        {
                                    title:"Contacts",
                                    path:"/contact"
                        }
            ]
    return (
        <div className='bg-base-100 text-slate-900'>
            <div className="navbar container mx-auto ">
            <div className="navbar-start">
                <Link href={'/'}>
                    <Image 
                        alt="logo" 
                        src="/assets/logo.svg" 
                        height={60} 
                        width={100} 
                    />
                </Link>
               
            </div>
            <div className="navbar-center hidden lg:flex">
               <div className='flex items-center space-x-6'>
                        {
                                    navItems.map((item)=>(
                                                <Link className=' text-white font-semibold, hover:text-primary duration-300' href={item.path} key={item.path} > {item.title}</Link>
                                    ))
                        }
               </div>
            </div>
            <div className="navbar-end space-x-3">
           <div className='flex space-x-3 items-center'>
           <IoCartOutline className='text-white' />
           <IoIosSearch className='text-white'/>
           </div>
                <a className="btn btn-outline btn-primary px-8">Appointment</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
