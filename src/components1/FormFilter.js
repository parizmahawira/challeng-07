import React from "react";

const FormFilter = (props) => {
  return ( 
<section class="container" id="carimobil">
<div class="card container shadow">
    <div class="d-flex flex-column flex-md-row bd-highlight" >
        <div class="p-3 flex-fill bd-highlight">
            <label for="form_driver" class="form-label">Tipe Driver</label>
            <select class="form-select" id="form_driver">
                <option value="">Pilih Tipe Driver</option>
                <option value= "true">Dengan Sopir</option>
                <option value= "false">Tanpa Sopir (Lepas Kunci)</option>
            </select>
        </div>
        <div class="p-3 flex-fill bd-highlight">
            <label for="form_date" class="form-label">Tanggal</label>
            <input type="date" class="form-control" id="form_date" placeholder="Pilih Tanggal"></input>
        </div>
        <div class="p-3 flex-fill bd-highlight">
            <label for="form_time" class="form-label">Waktu Jemput</label>
            <input type="time" class="form-control" id="form_time" placeholder="Pilih Waktu"></input>
        </div>
        <div class="p-3 flex-fill bd-highlight">
            <label for="form_pass" class="form-label">Jumlah Penumpang</label>
            <input type="number" class="form-control" id="form_pass" placeholder="Jumlah Penumpang"></input>
        </div>
        <div class="p-3 flex-fill bd-highlight" style={{margin: 'auto', textAlign: 'center'}}>
            <div class="d-grid gap-3 mx-auto">
                <button class="btn btn-success btn-lg" type="button" id="load-btn">CariMobil </button>
                {/* <button class="btn btn-success btn-lg" type="button" id="clear-btn">Reset </button> */}
              </div>
        </div>
    </div>
    </div>
    </section>
);
};

export default FormFilter;