import HeaderMenu from "@/components/HeaderMenu/page";
import MenuMain from "@/components/MenuMain/page";
import SideBarNav from "@/components/SideBarNav/page";

const HomeMain = () => {

  
  return (
    <div className="">
      <div className="flex">
        <SideBarNav />
        <div className="ml-7">
          <HeaderMenu />
          <MenuMain />
        </div>
      </div>
    </div>
  )
}

export default HomeMain;