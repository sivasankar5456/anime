import {Link} from "react-router-dom"

import cn from './logo/cn1.png'




const Navbar = () => {
    return ( 
        <center>
       
        <nav>
            <img id="cn" src={cn} alt="" />
            <input id="search" type="search"  placeholder="search" className="form-control me-2"  />
            <button id="searchbotton" className="btn btn-outline-primary">🔍</button>
          
          
          <Link  to="/wishlist">whishlist</Link>
        
        </nav>
        </center>
     );
}
 
export default Navbar;





















































