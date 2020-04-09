import React from 'react';
import { Pie } from 'react-chartjs-2';


export default function PieChart(props) {

    const data = {
        labels: [
            'Completed',
            'Waiting',
            // 'Yellow'
        ],
        datasets: [{
            data: [props.completedLength, props.waitingLength],
            backgroundColor: [
                '#00FF00',
                '#f8de7e',
                // '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#00FF00',
                '#f8de7e',
                // '#FFCE56'
            ]
        }]
    };

    return (
        <div>
            <h2>Completed and Waiting Customers Ratio</h2>
            <Pie data={data} />
        </div>
    );

}