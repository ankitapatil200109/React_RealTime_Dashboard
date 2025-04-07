// src/components/SalesChart.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

// Register required chart.js components
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const SalesChart = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.time),
        datasets: [{
            label: 'Sales ($)',
            data: data.map(d => d.amount),
            borderColor: '#007bff',
            fill: false,
        }]
    };

    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <h5 className="mb-4">Real-Time Sales</h5>
                <Line data={chartData} />
            </Card.Body>
        </Card>
    );
};

export default SalesChart;
