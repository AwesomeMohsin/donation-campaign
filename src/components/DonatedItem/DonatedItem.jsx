import { Link } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";

const DonatedItem = ({ donate }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price } = donate;

    

    return (
        <div style={{backgroundColor: card_bg}} className="card card-side shadow-xl w-11/12 mx-auto">
            <figure>
                <img className=" md:h-[200px] md:w-[220px] lg:h-full" src={picture} alt="picture" />
            </figure>
            <div className="p-6">
                <p
                    style={{ backgroundColor: category_bg, color: text_button_bg }} className="text-sm font-medium max-w-fit py-1 px-2 rounded-md mb-1">{category}</p>
                <h2 className="card-title text-2xl font-semibold pb-1">{title}</h2>
                <h4 style={{color: text_button_bg}} className="font-semibold">${price}</h4>
                <Link to={`/donation/${id}`}>
                <button style={{backgroundColor: text_button_bg}} className="btn mt-3 lg:w- lg:text-lg text-white">View details</button>
                </Link>
                       
            </div>
        </div>
    );
};

export default DonatedItem;