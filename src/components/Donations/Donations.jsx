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
        if (donations.length >= 0) {
            
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
            <div className="grid lg:grid-cols-2 gap-6 pb-10">
            {
                
                donatedItem.slice(0, itemLength).map(donate => <DonatedItem key={donate.id} donate={donate}></DonatedItem>)
            }
            </div>
            <h2 className={donatedItem.length === 0 ? 'text-center text-3xl pt-10' : 'hidden'}>You have not donated yet</h2>
            <div className={donatedItem.length === itemLength || donatedItem.length < 4 ? 'hidden' : 'text-center pb-36'}>
                
                <button onClick={()=> setItemLength(donatedItem.length)} className="btn text-white bg-[#009444]">See All</button>
            </div>
        </div>
    );
};

export default Donations;