import HeaderMenu from "@/components/HeaderMenu/page";
import SignIn from "./(pages)/SignIn/page";
import MenuMain from "@/components/MenuMain/page";

const Home = () => {

  return (
    <div className="container">
      <HeaderMenu/>
      <MenuMain/>
    </div>
  )
}

export default Home;