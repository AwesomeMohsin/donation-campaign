import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedItem } from "../../Utility/localStorage";
import DonatedItem from "../DonatedItem/DonatedItem";

const Donations = () => {

    const donations = useLoaderData();
    const [donatedItem, setDonatedItem] = useState([]);
    const [itemLength, setItemLength] = useState(4);

    useEffect(() => {
        const storedDonatedIds = getStoredDonatedItem();
        if (donations.length > 0) {
            const itemDonated = [];
            for (const id of storedDonatedIds) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    itemDonated.push(donation);
                }
            }
            setDonatedItem(itemDonated);
        }
    }, [donations])

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6 pb-10">
            {
                donatedItem.slice(0, itemLength).map(donate => <DonatedItem key={donate.id} donate={donate}></DonatedItem>)
            }
            </div>
            <div className={donatedItem.length === itemLength ? 'hidden' : 'text-center pb-36'}>
                <button onClick={()=> setItemLength(donatedItem.length)} className="btn text-white bg-[#009444]">See All</button>
            </div>
        </div>
    );
};

export default Donations;