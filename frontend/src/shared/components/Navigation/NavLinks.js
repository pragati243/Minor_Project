import {
    menuItems
} from "../menuItems";
import MenuItems from "./MenuItems";
const NavLinks = () => {
    return ( <nav>
        <ul className = "menus" > {
            menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items = {
                    menu
                }
                key = {
                    index
                }
                depthLevel = {
                    depthLevel
                }
                />;
            })
            
        } 
        <div class="topnav">
        <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div></div>
        </ul></nav>
    );
};

export default NavLinks;