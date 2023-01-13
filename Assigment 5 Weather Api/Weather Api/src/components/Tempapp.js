import React, {useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState();
    const [search, setSearch] = useState("Wah Cantt");

    useEffect( () => {
        const fetchApi = async () => {
    
        const url = `http://api.weatherapi.com/v1/current.json?key=2ab0db6072994bb6ad970744221012&q=${search}&unit=metric`
        
        const response = await fetch(url);
        // console.log(response);
        const resJson = await response.json();
         console.log("resoopop",resJson);
        // setCity(resJson);
        setCity(resJson.current);
    }
    fetchApi();
},[search])
console.log('ffgfgfhg',search)
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search" className="inputFeild"
                    onChange={(event) => { setSearch(event.target.value) }}
                        value={search}
                    /> 
                </div>

                {
                    !city ? (
                        <p> No Data Found </p>
                    ) : (
                        <div>

            <div className="info">
                <h2 className="location">
                   <i className="fas fa-street-view"></i>
                   {search}
                </h2>
               
                <h2>
                    Condition = {city.condition.text}
                </h2>
                <img src={city.condition.icon} />
                <h2>
                    Temperature  = {city.temp_c}<sup>o</sup>C
                </h2>
                <h2>
                    Temperature  = {city.temp_f}<sup>o</sup>F
                </h2>
                 {/* <h1 className="temp">
                    {city.location.name}
                </h1> */}
<br/>
                {/* <h2>
                    Country = {city.location.country}
                </h2> */}
                
            </div>
                     
                     {/* <div className="wave -one"></div>
                     <div className="wave -two"></div>
                     <div className="wave -three"></div> */}
                        </div>
                    )

                }

            </div> {/* BOx div close */}

        </>
    )
}

export default Tempapp;