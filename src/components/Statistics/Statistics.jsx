import { PieChart } from 'recharts';
import { percantageCalculation } from '../../Utility/statisticPercantage';

const Statistics = () => {

    const gg = percantageCalculation()
        .then(data => {
            const set = data;
            // console.log(set);
            return (set);
        })

    console.log(gg);
    return (
        <div>
            <h2>Statistics page</h2>


            <PieChart width={400} height={400}>

            </PieChart>

        </div>
    );
};

export default Statistics;