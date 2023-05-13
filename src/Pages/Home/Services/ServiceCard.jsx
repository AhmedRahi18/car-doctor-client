import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
          <div>
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-xl font-bold text-orange-500">Price: ${price}</p>
          </div>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
            <button className="btn btn-warning bg-orange-500 text-white font-bold">
                Book Now
            </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
