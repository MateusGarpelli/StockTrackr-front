import FormProducts from '@/components/FormProduct/page'
import HeaderProducts from '@/components/HeaderProducts/page'
import SideBarNav from '@/components/SideBarNav/page'
import React from 'react'

const page = () => {
  return (
    <div className='flex bg-[#F6F6F6] '>
      <div className="flex">
        <SideBarNav />
        <div className="ml-7">
          <div className="">
            <HeaderProducts />
          </div>
          <div className="">
            <FormProducts />
          </div>
        </div>
      </div>

    </div>
  )
}

export default page