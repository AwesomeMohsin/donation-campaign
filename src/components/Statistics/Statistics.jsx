import { useLoaderData } from 'react-router-dom';
import { percentageCalculation } from '../../Utility/statistics';
import { Chart } from "react-google-charts";
import { useEffect, useState } from 'react';

const Statistics = () => {
    const donations = useLoaderData();
    // console.log(donations);
    const [localStorageData, setLocalStorageData] = useState([]);

    useEffect(() => {
        const donated = parseFloat(percentageCalculation({ donations }));
        setLocalStorageData(donated);

    }, [donations])


    const remaining = 100 - localStorageData;

    console.log({ localStorageData, remaining });



    const data = [
        ["Donation", "Percantage"],
        ["Your Donation", localStorageData],
        ["Total Donation", remaining],


    ];

    const options = {
        colors: ['#00C49F', '#FF444A'],
        legend: { position: "bottom" },
    };



    return (
        <div className='mt-[-80px]'>

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"700px"}
            />


        </div>
    );
};

export default Statistics;