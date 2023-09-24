import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const donation = donations.find(donation => donation.id === idInt)
    console.log(donation);

    const handleDonateBtn = () => {
        console.log('clicked');
    }

    return (
        <div>
            <div className="relative">
                <img src={donation.picture} alt="" className="mx-auto w-full h-full" />

            </div>
            <div className="absolute darker-overlay container mx-auto ">
                <button onClick={handleDonateBtn} className="btn btn-primary m-10 ">Donate: ${donation.price}</button>

            </div>

            <h2 className="text-4xl font-bold pt-12">{donation.title}</h2>
            <p className="pt-6 pb-32 text-justify font-normal leading-7">{donation.description}</p>


        </div>
    );
};

export default DonationDetails;