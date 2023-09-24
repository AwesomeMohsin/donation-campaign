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
        <div>
            <div className="relative">
                <img src={donation.picture} alt="" className="mx-auto w-full h-full" />

            </div>
            <div className="absolute darker-overlay container mx-auto top-[82%] md:top-[135%] lg:top-[685px]">
                <button onClick={handleDonateBtn} className="btn btn-primary m-2 2xl:m-10 ">Donate: ${donation.price}</button>

            </div>

            <h2 className="text-4xl font-bold pt-12">{donation.title}</h2>
            <p className="pt-6 pb-32 text-justify font-normal leading-7">{donation.description}</p>

        <Toaster></Toaster>
        </div>
    );
};

export default DonationDetails;