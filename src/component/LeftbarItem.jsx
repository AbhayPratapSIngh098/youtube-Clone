import React from 'react'

const LeftbarItem = ({title, Icon, action, bg}) => {
  return (
    <div className={`flex flex-row  cursor-pointer text-white text-sm h-10 items-center  px-3 mb-[1px] rounded-xl hover:bg-[#303030]/[0.6] ${bg}`} onClick={action}>
      <span className='text-xl mr-5'>{Icon}</span>{title}
    </div>
  )
}

export default LeftbarItem