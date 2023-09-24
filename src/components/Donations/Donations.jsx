import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedItem } from "../../Utility/localStorage";
import DonatedItem from "../DonatedItem/DonatedItem";

const Donations = () => {

    const donations = useLoaderData();
    const [donatedItem, setDonatedItem] = useState([]);

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
        <div className="grid md:grid-cols-2 gap-6">
            {
                donatedItem.map(donate => <DonatedItem key={donate.id} donate={donate}></DonatedItem>)
            }
        </div>
    );
};

export default Donations;