import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Home = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donations.json')
            .then(res => res.json())
            .then(data => setDonations(data))

    }, [])

    return (
        <div>

            {/* Banner Section */}
            <section className="hero h-[600px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/wNTRQNn/volunteers-charity.jpg)' }}>

                <div className="overlays"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>

                        <div className="join rounded-lg pt-10">
                            <input className="input input-bordered join-item text-black" placeholder="Search here..." />
                            <button className="btn join-item bg-[#FF444A] text-white">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation section */}
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-24 pb-44 w-11/12 md:w-full mx-auto">
                {
                    donations.map(donation => <Donation
                        key={donation.id}
                        donation={donation}></Donation>)
                }

            </section>


        </div>
    );
};

export default Home;