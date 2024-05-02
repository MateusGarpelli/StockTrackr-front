import HeaderMenu from "@/components/HeaderMenu/page";
import SignIn from "./(pages)/SignIn/page";
import MenuMain from "@/components/MenuMain/page";
import SideBarNav from "@/components/SideBarNav/page";

const Home = () => {

  return (
    <div className="container">
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

export default Home;