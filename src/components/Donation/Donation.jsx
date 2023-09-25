import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
    console.log(donation);
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation;


    return (

        <Link to={`/donation/${id}`}>

            <div style={{backgroundColor: card_bg}} className="card card-compact shadow-xl" >
                <figure><img className="" src={picture} alt="picture" /></figure>
                <div className="card-body">
                    <p style={{backgroundColor: category_bg, color: text_button_bg}} className="text-sm font-medium max-w-fit py-1 px-2 rounded-md">{category}</p>
                    <h2 style={{color: text_button_bg}} className="font-semibold text-xl">{title}</h2>
                </div>
            </div>
            
        </Link>

    );
};

export default Donation;