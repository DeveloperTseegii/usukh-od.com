import FontAwesomeIcon from 'fontawesome'


export default function Classes(){
     return(
        <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1>Клубын ангиуд</h1>
                <p>
                  Та доорхи ангиудаас сонгон суралцах боломжтой.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="" className="rounded-circle img-fluid border" /></a>
                <h5 className="text-center mt-3 mb-3">Хүүхэд</h5>
                <p className="text-center"><a className="btn btn-success">Бүртгүүлэх</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="" className="rounded-circle img-fluid border" /></a>
                <h2 className="h5 text-center mt-3 mb-3">Том хүн</h2>
                <p className="text-center"><a className="btn btn-success">Бүртгүүлэх</a></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
                <a href="#"><img src="" className="rounded-circle img-fluid border" /></a>
                <h2 className="h5 text-center mt-3 mb-3">Хүүхнд том хүн хосолсон</h2>
                <p className="text-center"><a className="btn btn-success">Бүртгүүлэх</a></p>
            </div>
        </div>
      </section>
     )
}