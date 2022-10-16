import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {getRequest} from "../../requestBuilder";
import {apiEndpoint} from "../../common";

const PerformanceGraph = (props) => {
    const [labels, setLabels] = useState([]);
    const [profits, setProfits] = useState([]);
    useEffect(() => {
       loadProfits();
    }, [])

    const loadProfits = async () => {
        const profitObjs = await getRequest(apiEndpoint + '/performance');
        setLabels(profitObjs.data.performance.map(obj => obj.month));
        setProfits(profitObjs.data.performance.map(obj => parseFloat(obj.profit.substring(1))));
    }

    const state = {
        labels: labels,
        datasets: [
            {
                label: 'Profit',
                backgroundColor: 'rgba(75,192,192,1)',
                data: profits,
                maxBarThickness: 20
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
                        position:'right',
                        color: '#ffffff'
                    }
                }}
            />
        </div>
    )
}

export default PerformanceGraph;
