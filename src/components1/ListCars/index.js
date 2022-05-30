import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../actions/carsAction";

function ListCars() {
    const { listCarsResult,listCarsLoading,listCarsError } = useSelector((state) => state.carReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        // get action list cars
        console.log("1. use effect component did mount")
        dispatch(getListCars());
    }, [dispatch])


    return (
        <div className="container mb-5 p-5">
        <div className="row p-4 ">
                {listCarsResult ? (
                    listCarsResult.map((car) => {
                                return (
                            <div className="card col-lg-4 col-sm-6 p-2 mb-5">
                                <img className="card-img-top"  src={car.image} alt={car.plate}style={{ height: "200px" }}  />
                                <div className="card-body">
                                
                                <p className="card-title" key={car.id}>{car.manufacture} - {car.type}</p>
                                <p className="card-text">Kapasitas : {car.capacity}</p>
                                <p className="card-text">Harga Sewa : {car.rentPerDay}</p>
                                <button className="btn btn-success" style={{ width: "120px" }} id="submit">Pilih Mobil</button>
                            </div>
                            </div>
                            
                            )
                    })
                ) : listCarsLoading ? (
                    <p>Loading . . . </p>
                ) : (
                    <p>{listCarsError ? listCarsError : "Data Kosong"}</p>
                )
            }
            </div>
        </div>
    );
}

export default ListCars;