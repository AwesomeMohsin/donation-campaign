import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { setDonatedItem } from "../../Utility/localStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const donation = donations.find(donation => donation.id === idInt)
    console.log(donation);

    const handleDonateBtn = () => {
        setDonatedItem(idInt);
        toast.success('You have donated successfully')
    }

    return (
        <div className="">
            <div className="relative">
                <img src={donation.picture} alt="" className="mx-auto w-full h-full" />
                <div className="absolute darker-overlay container mx-auto">
                <button onClick={handleDonateBtn} className="btn-sm md:btn-md 2xl:btn-lg btn m-2 md:m-5 lg:m-10 2xl:m-14 ">Donate: ${donation.price}</button>

            </div>

            </div>
            

            <h2 className="text-4xl font-bold pt-12">{donation.title}</h2>
            <p className="pt-6 pb-32 text-justify font-normal leading-7">{donation.description}</p>

        <Toaster></Toaster>
        </div>
    );
};

export default DonationDetails;