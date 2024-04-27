import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()


    useEffect(()=>{
        if(user?.role !== ROLE.ADMIN){
            navigate("/")
        }
    },[user])

  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>

        <aside className='bg-white min-h-full  w-full  max-w-60 customShadow'>
                    <h1 className='text-2xl font-serif font-bold text-white p-4 w-full bg-blue-400 rounded-sm tracking-wider'>DashBoard</h1>
                <div className='h-20  flex justify-evenly items-center py-4'>
                    <div className='text-5xl cursor-pointer border-4 border-slate-100  rounded-full relative flex justify-center'>
                        {
                        user?.profilePic ? (
                            <img src={user?.profilePic} className='w-16 h-16 rounded-full shadow' alt={user?.name} />
                        ) : (
                            <FaRegCircleUser/>
                        )
                        }
                    </div>
                    <div className='flex text-center flex-col'>
                  
                    <p className='capitalize text-xl font-bold'>{user?.name}</p>
                    <p className='text-sm text-red-500 font-semibold font-sans'>{user?.role}</p>
                          
                    </div>
                </div>

                 {/***navigation */}       
                <div className='text-2xl w-full h-full '>   
                    <nav className='grid p-4 w-full'>
                       
                        <Link to={"all-users"} className='px-4 py-2 hover:bg-red-400 hover:rounded-md '>
                        <div className='flex flex-row gap-4 w-full h-full'>
                            <FaUser /> Users
                        </div>
                        </Link>
                        <Link to={"all-products"} className='px-4 py-2 hover:bg-red-400 hover:rounded-md '>
                        <div className='flex flex-row gap-4 w-full h-full'>
                        <FaShoppingBag /> Products
                        </div>
                        </Link>
                    </nav>
                </div>  
        </aside>

        <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel