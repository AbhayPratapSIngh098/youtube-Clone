import React,{useContext} from 'react';
import { Context } from '../context/context';
import {categories} from "../utlis/constants";
import LeftbarItem from "./LeftbarItem";
import { useNavigate } from 'react-router-dom';


const Leftbar = () => {
    const navigate = useNavigate();
    const{mobileMenu,selectCategory,setSelectedCategory}= useContext(Context);

    const backGroundHandler=(value)=>{
    console.log(value)
    setSelectedCategory(value)
    navigate("/");
}


  return (
    <div className={`w-[250px] text-white bg-black h-full absolute transition-all md:block md:translate-x-[0] ${mobileMenu? "translate-x-[0]": "translate-x-[-250px]"}`}>
        <div className='flex flex-col mx-5 py-5 overflow-y-auto'>
            {categories.map((value,key)=>{
                return(
                    <React.Fragment key={key}>
                        <LeftbarItem title={value.name ==="New"?"Home": value.name} Icon={value.icon} action={()=>backGroundHandler(value.name)} bg={selectCategory === value.name? "bg-white/[0.15]": ""}/>
                        { value.divider && <hr className='my-5 border-white/[0.5]'/>}

                    </React.Fragment>
                )
               
            })}
            <div className='text-white/[0.5] text-[12px]'>
            <hr className='my-5 border-white/[0.5]' />
            Abhay Pratap Singh
            </div>
        </div>
        
    </div>
  )
}

export default Leftbar