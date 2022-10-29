import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
    <>
    <nav class="navbar navbar-expand-lg bg-light navbar-light ">
          
          <a class="navbar-brand" href="index.html"> Celebrity Beefs </a>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              
              <li class="nav-item">
               <Link class="nav-link" to="/">Home</Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link" to="/blogs">Menu</Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Purchase</Link>
              </li>
            </ul>
          </div>
        </nav>

    <Outlet />
    </>
    )
};

export default Layout;