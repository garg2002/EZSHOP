import React, { useContext, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
import logo from '../assest/logo.png'

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  console.log("user",user);
  const dispatch = useDispatch()
  const [menuDisplay,setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }

  }

  const handleSearch = (e)=>{
    const { value } = e.target
    setSearch(value)

    if(value){
      navigate(`/search?q=${value}`)
    }else{
      navigate("/search")
    }
  }
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className=' h-full container  flex items-center px-1  '>
                <Link to={"/"}>
            <div className='flex w-36 md:w-80 h-2/8 justify-center mx-2'>
                   <img src={logo} className='object-cover' alt="ezStore" width={110} height={40} />
            </div>
                </Link>

            <div className='shadow-sm w-52 h-7 flex md:h-12 gap-4 bg-slate-50 md:w-full max-w-xl border rounded-lg focus-within:shadow pl-2'>
              
               <GrSearch className='mt-1 md:mt-3 text-xl md:text-2xl  text-gray-300'/>
                <input type='text' placeholder='Search for Product, Brands and More ' className='w-full overflow-hidden pr-2 h-full outline-none bg-slate-50 text-lg md:text-xl text-black font-serif font-medium' onChange={handleSearch} value={search}/>
                
            </div>


            <div className='flex  h-full justify-end md:justify-end gap-2 w-full'>
                
                <div className='relative h-full w-16   flex justify-evenly md:w-1/3'>

                  {
                    user?._id && (
                      <div className='text-lg md:text-3xl  cursor-pointer relative flex ' onClick={()=>setMenuDisplay(prev => !prev)}>
                        {
                          user?.profilePic ? (
                            <div className='flex gap-3 mt-2 md:mt-2'>
                            <img src={user?.profilePic} className=' w-10 h-10 rounded-full' alt={user?.name} />
                            <h2 className=' hidden md:flex text-gray-800 text-xl font-serif mt-2 capitalize'>{user?.name}</h2>
                            </div>
                          ) : (
                            <div className='flex gap-4'>
                            <FaRegCircleUser className='mt-5 text-2xl '/>
                            <h2 className=' hidden md:flex text-gray-800 text-xl font-serif mt-5 capitalize'>{user?.name}</h2>
                           </div>
                          )
                        }
                      </div>
                    )
                  }
                  
                  
                  {
                    menuDisplay && (
                      <div className='absolute bottom-0   top-16 left-3 h-fit ' >
                        <nav>
                          {
                            user?.role === ROLE.ADMIN && (
                              <Link to={"/admin-panel/all-products"} className='whitespace-nowrap  font-serif font-bold hidden rounded-sm md:block bg-white text-black hover:bg-red-600 hover:text-white p-2' onClick={()=>setMenuDisplay(prev => !prev)}>Admin Panel</Link>
                            ) 
                          }
                         
                        </nav>
                      </div>
                    )
                  }
                 
                </div>

                  {
                     user?._id && (
                      <Link to={"/cart"} className='text-3xl relative mt-4'>
                          <div className='w-10 md:w-1/3 h-full flex '>
                          <span><FaShoppingCart/></span>
                          <div className='  w-8 h-8  flex gap-1 justify-evenly'>
                              <p className='text-sm  w-4 text-center h-5 mt-[-10px] rounded-xl text-white px-1 bg-red-600'>{context?.cartProductCount}</p>
                              <h2 className='hidden md:flex text-xl font-serif text-gray-700 capitalize'>Cart</h2>
                          </div>
                          </div>
                      </Link>
                      )
                  }
              


                <div className='text-sm md:text-xl flex h-full md:w-1/3  md:justify-end items-center'>
                  {
                    user?._id  ? (
                      <button onClick={handleLogout} className='px-3 py-1 rounded font-serif font-bold text-white bg-emerald-400 hover:bg-red-700'>
                        Logout
                      </button>
                    )
                    : (
                    <Link to={"/login"} className='px-3 py-1 rounded text-white font-serif font-bold bg-red-600 hover:bg-red-700'>Login</Link>
                    )
                  }
                    
                </div>

            </div>

      </div>
    </header>
  )
}

export default Header