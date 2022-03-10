

export default function Slider(){
    return(
        <div className="slider">
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
              <li data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="container">
                      <div className="row p-5">
                          <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img className="img-fluid" src="image/tennis02.webp" alt="" />
                          </div>
                          <div className="col-lg-6 mb-0 d-flex align-items-center">
                              <div className="text-align-left align-self-center">
                                  <h1 className="text-primary"><b>Usukh-Od</b> Table Tennis Club</h1>
                                  <h3 className="h2"></h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="carousel-item">
                  <div className="container">
                      <div className="row p-5">
                          <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img className="img-fluid" src="image/tennis01.webp" alt="" />
                          </div>
                          <div className="col-lg-6 mb-0 d-flex align-items-center">
                              <div className="text-align-left">
                                  <h1>Тав тухтай орчин</h1>
                                  <h3 className="h2">Lorem Ipsum Lorem Ipsum</h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="carousel-item">
                  <div className="container">
                      <div className="row p-5">
                          <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img className="img-fluid" src="image/tennis03.webp" alt="" />
                          </div>
                          <div className="col-lg-6 mb-0 d-flex align-items-center">
                              <div className="text-align-left">
                                  <h1>Мэргэжлийн багш нар</h1>
                                  <h3 className="h2">Lorem Ipsum Lorem Ipsum </h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#hero-carousel" role="button" data-bs-slide="prev">
              <i className="fas fa-chevron-left"></i>
          </a>
          <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#hero-carousel" role="button" data-bs-slide="next">
              <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        </div>
    )
} 