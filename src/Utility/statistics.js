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



const percentageCalculation = ({donations}) => {

    // calculation
    const donatedItemLength = getStoredDonatedItemLength();
    const divide = donatedItemLength / donations.length;
    const donated = divide * 100;

    return(donated.toFixed(2));

}


export{percentageCalculation}