import HeaderStock from "@/components/HeaderStock/page"
import SideBarNav from "@/components/SideBarNav/page"
import StockProduct, { StockFilter } from "@/components/StockFilter/page"
import StockMain from "@/components/StockMain/page"

const page = () => {
  return (
    <div className='flex bg-[#F6F6F6] '>
      <div className="flex">
        <SideBarNav />
        <div className="ml-7">
          <div className="">
            <HeaderStock />
          </div>
          <div className="ml-5">
            <div>
              <StockFilter />
            </div>
            <div className="mt-[80px]">
              <StockMain />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page