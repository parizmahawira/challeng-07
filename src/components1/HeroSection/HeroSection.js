import React from 'react'

function HeroSection() {
  return (
    <div>
       <section id="home">
        <div class="d-flex justify-content-center mx-3 px-5 navbar-light bg-light">
            <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
                <div class="col my-5">
                    <h2 class="my-5 fw-bold">
                        Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                    </h2>
                    <p>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil
                        kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                        kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <a class="btn btn-success" href="ListCars" role="button">Mulai Sewa Mobil</a>
                </div>
                <div class="col my-5">
                    <img class="img-fluid" src="https://i.ibb.co/Yt7YJgV/img-car.png" alt="Car" />
                </div>
            </div>
        </div>
        <div class="__stand bg-primary"></div>
    </section>
    </div>
  )
}

export default HeroSection