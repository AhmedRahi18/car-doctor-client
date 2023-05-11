import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <h3 className="text-orange-500 mb-5 text-xl font-bold">Service</h3>
                <h2 className="text-5xl font-bold mb-5">Our Service Area</h2>
                <p className="text-slate-500 mb-10">the majority
                 have suffered alteration in some form, by injected humour, 
                or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;