import React from 'react'

function OurServise() {
  return (
    <section id="ourservices">
    <div class="d-flex justify-content-center mx-3 px-3">
        <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-md-1 g-lg-2">
            <div class="col my-5">
                <img class="img-fluid" src="https://i.ibb.co/m6mmBjH/img-service.png" alt="Car" />
            </div>
            <div class="col my-5">
                <h2 class="__osHeader my-5">
                    Best Car Rental for any kind of trip in (Lokasimu)!
                </h2>
                <p class="__osParagraph">
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                    lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                    kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                    wedding, meeting, dll.
                </p>

                <ul class="list-group">
                    <li class="list-group-item __osSuperiority">
                        <span class="__osIcon bg-primary bg-opacity-25"></span>
                        Sewa Mobil Dengan Supir di Bali 12 Jam
                    </li>
                    <li class="list-group-item __osSuperiority">
                        <span class="__osIcon bg-primary bg-opacity-25"></span>
                        Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </li>
                    <li class="list-group-item __osSuperiority">
                        <span class="__osIcon bg-primary bg-opacity-25"></span>
                        Sewa Mobil Jangka Panjang Bulanan
                    </li>
                    <li class="list-group-item __osSuperiority">
                        <span class="__osIcon bg-primary bg-opacity-25"></span>
                        Gratis Antar - Jemput Mobil di Bandara
                    </li>
                    <li class="list-group-item __osSuperiority">
                        <span class="__osIcon bg-primary bg-opacity-25"></span>
                        Layanan Airport Transfer / Drop In Out
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurServise