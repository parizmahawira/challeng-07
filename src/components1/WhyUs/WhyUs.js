import React from 'react'

function WhyUs() {
  return (
    <div>
        <section class="jumbotronthree" id="whyus">
        <h2><strong>Why Us?</strong></h2>
        {/* <!-- Membuat Baris Baru --> */}
        <div class="container d-flex my-5">
          {/* <!-- Membuat Kolom --> */}
          <div class="col">
            <div class="box">
              <img src="https://i.ibb.co/RHSyqfV/icon-complete.png" class="img-fluid" alt="Model" align="left" />
              <h8><strong>Mobil Lengkap</strong></h8>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
          <div class="col">
            <div class="box">
              <img src="https://i.ibb.co/61y72KT/icon-price.png" class="img-fluid" alt="Model" align="left" />
              <h8><strong>Harga Murah</strong></h8>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>
          <div class="col">
            <div class="box">
              <img src="https://i.ibb.co/0VGvs0G/icon-24hrs.png" class="img-fluid" alt="Model" align="left" />
              <h8><strong>Layanan 24 Jam</strong></h8>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
          </div>
          <div class="col">
            <div class="box">
              <img src="https://i.ibb.co/yB9MQ0R/icon-professional.png" class="img-fluid" alt="Model" align="left" />
              <h8><strong>Sopir Profesional</strong></h8>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
      </div>
    </section>
    </div>
  )
}

export default WhyUs