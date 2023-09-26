import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Home = () => {

    const [donations, setDonations] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [displayDonations, setDisplayDonations] = useState([])


    useEffect(() => {

        if (!handleDonationFilter()) {
            fetch('/data.json')
                .then(res => res.json())
                .then(data => setDisplayDonations(data))
        }

        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDonations(data))


    }, [])


    const handleSearchInput = () => {
        const getInput = document.getElementById('search-field');
        const inputText = getInput.value;
        setSearchData(inputText.toLowerCase());
    }

    const handleDonationFilter = filter => {

        if (filter === 'food') {
            const foodCategory = donations.filter(donation => donation.category === 'Food');
            setDisplayDonations(foodCategory);
        }
        else if (filter === 'education') {
            const educationCategory = donations.filter(donation => donation.category === 'Education');
            setDisplayDonations(educationCategory);
        }
        else if (filter === 'health') {
            const healthCategory = donations.filter(donation => donation.category === 'Health');
            setDisplayDonations(healthCategory);
        }
        else if (filter === 'clothing') {
            const clothingCategory = donations.filter(donation => donation.category === 'Clothing');
            setDisplayDonations(clothingCategory);
        }
        else {
            setDisplayDonations(donations)
        }

    }



    return (
        <div>

            {/* Banner Section */}
            <section className="hero h-[600px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/wNTRQNn/volunteers-charity.jpg)' }}>

                <div className="overlays"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>

                        <div className="join rounded-lg pt-10">
                            <input onChange={handleSearchInput} id="search-field" className="input input-bordered join-item text-black" placeholder="Search here..." />
                            <button onClick={() => handleDonationFilter(searchData)} className="btn join-item bg-[#FF444A] text-white">Search</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Donation section */}
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-24 pb-44 w-11/12 lg:w-full mx-auto">

                {
                    displayDonations.map(donation => <Donation
                        key={donation.id}
                        donation={donation}></Donation>)
                }

            </section>


        </div>
    );
};

export default Home;