import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
    console.log(donation);
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation;


    return (

        <Link to={`/donation/${id}`}>

            <div className="card card-compact shadow-xl" >
                <figure><img className="" src={picture} alt="picture" /></figure>
                <div className="card-body">
                    <p className="text-sm font-medium">{category}</p>
                    <h2 className="font-semibold text-xl">{title}</h2>
                </div>
            </div>
            
        </Link>

    );
};

export default Donation;