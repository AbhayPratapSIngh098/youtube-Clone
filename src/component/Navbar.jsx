import React,{ useContext, useState}  from 'react';
import Loader from '../utlis/Loader';
import { useLocation, Link, useNavigate} from 'react-router-dom';

import ytLogo from "../images/yt-logo.png";
import ytLogomobile from "../images/yt-logo-mobile.png";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

import { Context } from '../context/context';
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";


const Navbar = () => {
 const {loading, mobileMenu, setMobileMenu} = useContext(Context);
 const [searchQuery,setSearchQuery] = useState("");
 const {pathname} = useLocation();
 const navigate = useNavigate();
 const pageName = pathname.split("/").filter(Boolean)?.[0];

 const searchHandler = (event)=>{
    
      if((event?.key ==="Enter" || event === "searchButton") && searchQuery?.length>0){
         navigate(`search/${searchQuery}`)
         setSearchQuery("")
      }
 
 }
  return (
    <div className='bg-black z-10 sticky top-0 p-4 text-white h-14 w-full flex items-center justify-between'>
      {loading && <Loader/>}
        <div className='flex items-center'>
           {pageName !=="video" && <div onClick={()=>setMobileMenu(!mobileMenu)} className='h-10 w-10 cursor-pointer md:hidden rounded-full flex mr-2 items-center justify-center hover:bg-white/[0.6]'>
            {mobileMenu? <CgClose className='text-xl text-white'/>:<SlMenu className='text-xl text-white'/>}</div>}
            <Link to="/" className='h-5 flex items-center'>
              <img src={ytLogo} alt="logo" className='h-full hidden md:flex' />
              <img src={ytLogomobile} alt="logo" className='h-full md:hidden flex' />
            </Link>
        </div>
        <div className='flex items-center group'>
          <div className='flex items-center rounded-l-3xl border border-[#303030] h-8 md:h-10 md:pl-5 group-focus-within:border-blue-500  md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
            <div className='w-10 justify-center items-center hidden group-focus-within:md:flex'>
            <IoIosSearch className='text-white text-xl'/>
            </div>
            <input type='text' placeholder='search' className='h-full pb-1 lg:w-[500px] bg-transparent pl-5 md:w-64 w-44 outline-none' value={searchQuery} onKeyUp={searchHandler} onChange={(e)=>setSearchQuery(e.target.value)}/>
          </div>
            <button className='pl-2 bg-[#303030] h-8 md:h-10 border border-[#303030] rounded-r-3xl w-[45px]' onClick={()=>searchHandler("searchButton")}><IoIosSearch className='text-white text-xl'/></button>
        </div>
        <div className='flex items-center'>
          <div className='hidden md:flex'>
            <div className='h-10 w-10 cursor-pointer flex items-center justify-center rounded-full hover:bg-white/[0.5]'><RiVideoAddLine className='text-xl text-white' /></div>
            <div className='h-10 w-10 cursor-pointer flex items-center justify-center rounded-full hover:bg-white/[0.5]'><FiBell className='text-xl text-white'/></div>
          </div>
            <div className='h-8 w-8 ml-2 cursor-pointer flex items-center justify-center rounded-full overflow-hidden'><img  alt="avtar" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" /></div>
        </div>
    </div>
  )
}

export default Navbar