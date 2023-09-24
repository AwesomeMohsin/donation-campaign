import { Link } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";

const DonatedItem = ({ donate }) => {
    console.log(donate);
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donate;

    const handleViewDetails = (id) => {
        <Link to={`/donation/${id}`}>
            <DonationDetails></DonationDetails>
        </Link>
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className=""><img className="h-[200px] w-[220px]" src={picture} alt="picture" /></figure>
            <div className="card-body">
                <p className="text-sm">{category}</p>
                <h2 className="card-title text-2xl">{title}</h2>
                <h4>${price}</h4>
                <button onClick={() => handleViewDetails(id)} className="btn mt-6 w-2/5 text-lg">View details</button>
                
            </div>
        </div>
    );
};

export default DonatedItem;