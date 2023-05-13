import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
    const service = useLoaderData();
    const { title, _id , price,img} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        console.log(email)
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('service book successfully')
            }
        })

    }

    return (
        <div>
      <h2 className="text-center text-3xl font-bold">Book Service : {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            defaultValue={user?.displayName}
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            placeholder="Date"
            name="date"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            defaultValue={user?.email}
            name="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            defaultValue={'$'+price}
            placeholder="Due Amount"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-warning btn-block ms-72
           text-white font-semibold"
           value="Order Confirm" />
        </div>
        </div>
      </form>
      <div className="card-body"></div>
    </div>
    );
};

export default BookService;