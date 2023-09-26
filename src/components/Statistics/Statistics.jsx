import { PieChart } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { percantageCalculation } from '../../Utility/statistics';
import { Chart } from "react-google-charts";

const Statistics = () => {
    const donations = useLoaderData();
    // console.log(donations);

    const donated = parseFloat(percantageCalculation({ donations }));
    const remaining = 100 - donated;
    console.log(donated, remaining);


    const data = [
        ["Donation", "Percantage"],
        ["Your Donation", donated],
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