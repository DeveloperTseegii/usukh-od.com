

export default function Footer(){
    return(
        <footer class="bg-dark" id="footer">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-primary border-bottom pb-3 border-light logo">Usukh-Od</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li>
                              <i class="fas fa-map-marker-alt fa-fw"></i>
                              Mongolia/Chuhag Sport Center
                          </li>
                          <li>
                              <i class="fa fa-phone fa-fw"></i>
                              <a class="text-decoration-none" href="#">85026802</a>
                          </li>
                          <li>
                              <i class="fa fa-envelope fa-fw"></i>
                              <a class="text-decoration-none" href="#">usukh-od@gmail.com</a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Shop</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Rackit</a></li>
                          <li><a class="text-decoration-none" href="#">Rubber</a></li>
                          <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
                          <li><a class="text-decoration-none" href="#">Shoes</a></li>
                          <li><a class="text-decoration-none" href="#">Ball</a></li>
                          <li><a class="text-decoration-none" href="#">Table</a></li>
                      </ul>
                  </div>
                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Home</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Home</a></li>
                          <li><a class="text-decoration-none" href="#">Бидний тухай</a></li>
                          <li><a class="text-decoration-none" href="#">Холбоо барих</a></li>
                          <li><a class="text-decoration-none" href="#">Түгээмэл асуулт хариулт</a></li>
                      </ul>
                  </div>
              </div>
              <div class="row text-light mb-4">
                  <div class="col-12 mb-3">
                      <div class="w-100 my-3 border-top border-light"></div>
                  </div>
                  <div class="col-auto me-auto">
                      <ul class="list-inline text-left footer-icons">
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/usukhodtabletennis.club"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                          </li>
                      </ul>
                  </div>
                  {/* <div class="col-auto">
                      <label class="sr-only" for="subscribeEmail">Email address</label>
                      <div class="input-group mb-2">
                          <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                          <div class="input-group-text btn-success text-light">Subscribe</div>
                      </div>
                  </div> */}
              </div>
          </div>

          <div class="w-100 bg-black py-3">
              <div class="container">
                  <div class="row pt-2">
                      <div class="col-12">
                          <p class="text-left text-light">
                              Copyright &copy; 2022 Usukh-Od TTC 
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </footer>
    )
}