import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { setDonatedItem } from "../../Utility/localStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const donation = donations.find(donation => donation.id === idInt)

    const handleDonateBtn = () => {
        setDonatedItem(idInt);
        toast.success('You have donated successfully')
    }

    return (
        <div className="w-11/12 md:w-full mx-auto">
            <div className="relative">
                <img src={donation.picture} alt="" className="mx-auto w-full h-full rounded-lg" />
                <div className="absolute darker-overlay container mx-auto rounded-b-lg">
                <button style={{backgroundColor: donation.text_button_bg}} onClick={handleDonateBtn} className="btn-sm md:btn-md xl:btn-lg btn m-1.5 md:m-5 lg:m-8 xl:m-10 2xl:m-14 border-none text-white">Donate ${donation.price}</button>

            </div>

            </div>

            <h2 className="text-4xl font-bold pt-12 text-[#0B0B0B]">{donation.title}</h2>
            <p className="pt-6 pb-32 text-justify font-normal leading-7 text-gray-600">{donation.description}</p>

        <Toaster></Toaster>
        </div>
    );
};

export default DonationDetails;