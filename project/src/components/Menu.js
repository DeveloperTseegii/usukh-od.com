import {useState, useEffect} from 'react'

function Menu() {
    const [navMenu, setNavMenu] = useState(false)
    const changeNavBg =() =>{
        if(window.scrollY >= 80){
            setNavMenu(true);
        }else{
            setNavMenu(false);
        }
    };
    window.addEventListener('scroll', changeNavBg);
  return (
  <div className="Menu">
    <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="nav_top">
          <div className="container text-light">
              <div className="w-100 d-flex justify-content-between">
                  <div>
                      <i className="fa fa-envelope mx-2"></i>
                      <a className="navbar-sm-brand text-light text-decoration-none" href="#">usuhk-od@gmail.com</a>
                      <i className="fa fa-phone mx-2"></i>
                      <a className="navbar-sm-brand text-light text-decoration-none" href="#">85026802</a>
                  </div>
                  <div>
                      <a className="text-light" href="https://www.facebook.com/usukhodtabletennis.club" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                      <a className="text-light" href="#" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                  </div>
              </div>
          </div>
        </nav>

        <nav className={navMenu ? 'navbar navbar-expand-lg shadow fixed-top bg-yellow': 'navbar navbar-expand-lg'}>
          <div className="container d-flex justify-content-between align-items-center">
              <a className="navbar-brand text-primary logo h1 align-self-center" href="/">
                  Usukh-od
              </a>
              <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="main_nav">
                  <div className="flex-fill">
                      <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="#">Бидний тухай</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Холбоо барих</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Блог</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Тэмцээн</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Shop</a>
                          </li>
                      </ul>
                  </div>
                  <div className="navbar align-self-center d-flex">
                      <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                          <div className="input-group">
                              <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                              <div className="input-group-text">
                                  <i className="fa fa-fw fa-search"></i>
                              </div>
                          </div>
                      </div>
                      <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                          <i className="fa fa-fw fa-search text-primary mr-2"></i>
                      </a>
                      <a className="nav-icon position-relative text-decoration-none" href="#">
                          <i className="fa fa-fw fa-cart-arrow-down text-primary mr-1"></i>
                          <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                      </a>
                      <a className="nav-icon position-relative text-decoration-none" href="#">
                          <button className="text-center px-3 text-dark">Нэвтрэх</button>
                      </a>
                  </div>
              </div>
          </div>
        </nav>
        <div className="modal fade bg-white" id="search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
              <div className="w-100 pt-1 mb-5 text-right">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form action="" method="get" className="modal-content modal-body border-0 p-0">
                  <div className="input-group mb-2">
                      <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                      <button type="submit" className="input-group-text bg-primary text-light">
                          <i className="fa fa-fw fa-search text-white"></i>
                      </button>
                  </div>
              </form>
          </div>
        </div>
  </div>
  );
}

export default Menu;