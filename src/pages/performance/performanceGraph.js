import React, {useEffect, useState} from "react";
import {CategoryScale} from 'chart.js';
import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';

const PerformanceGraph = (props) => {
    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Profit',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    return (
        <div className="performance-graph">
            <Bar
                data={state}
                options={{
                    title:{
                        display:true,
                        text:'Profit per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />
        </div>
    )
}

export default PerformanceGraph;
