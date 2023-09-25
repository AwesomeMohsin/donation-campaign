const getStoredDonatedItemLength = () => {
    const storedDonatedItem = localStorage.getItem('donated-item');

    if (storedDonatedItem) {
        const alreadyDonated = JSON.parse(storedDonatedItem).length;
        return alreadyDonated;
    }
    else {
        return 0;
    }
}
const donatedItemLength = getStoredDonatedItemLength();

const getJSONLength = async () => {
    // get json length
    let data = await fetch('donations.json');
    let donations = await data.json();
    return donations;

}



const percantageCalculation = async () => {

    const totalDonation = await getJSONLength();

     // calculation
    const divide = donatedItemLength / totalDonation.length;
    const percantage = divide * 100;

     return(percantage.toFixed(2));


    
}


   

export { getStoredDonatedItemLength, percantageCalculation }