import react, {  useState } from 'react'
import { dogstack } from '../util/stackClass'
import { dogNames, expTimes } from '../util/timeTrack'
import type { ChartData, ChartOptions } from 'chart.js'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)




const Stackchart: React.FC = () => {
    const [timeData, setTimeData] = useState<number[]>()
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Total Stack Time Bar Graph',
            },
        },
    }

    const labels: string[] | undefined = dogNames()
    
    const updateTimes = () => { 
        setInterval(()=>{
            setTimeData(expTimes())
        }, 2000)

    }

    updateTimes()

    const data = {
        labels,
        datasets: [
            {
                label: 'Dog-Stack-Times',
                data: timeData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }
        ]

    }

    interface BarProps {
        opt: ChartOptions<'bar'>;
        data: ChartData<'bar'>;
    }



    
    return (
            <Bar options={options} width={600} height={700} data={data} />
    )


};

export default Stackchart;
