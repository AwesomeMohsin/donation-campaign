import { Link } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";

const DonatedItem = ({ donate }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donate;

    

    return (
        <div className="card card-side bg-base-100 shadow-xl w-11/12 mx-auto">
            <figure>
                <img className=" md:h-[200px] md:w-[220px]" src={picture} alt="picture" />
            </figure>
            <div className="card-body">
                <p className="text-sm">{category}</p>
                <h2 className="card-title text-2xl">{title}</h2>
                <h4>${price}</h4>
                <Link to={`/donation/${id}`}>
                <button className="btn mt-6 lg:w- lg:text-lg">View details</button>
                </Link>
                       
            </div>
        </div>
    );
};

export default DonatedItem;