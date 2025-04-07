// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import SummaryCards from './SummaryCards';
import SalesChart from './SalesChart';
import RecentOrders from './RecentOrders';

const generateMockData = () => ({
    stats: [
        { label: 'Orders', value: Math.floor(Math.random() * 1000) },
        { label: 'Revenue', value: `$${(Math.random() * 50000).toFixed(2)}` },
        { label: 'Customers', value: Math.floor(Math.random() * 300) },
        { label: 'Returns', value: Math.floor(Math.random() * 20) }
    ],
    chart: Array.from({ length: 10 }, (_, i) => ({
        time: `${i + 1} min ago`,
        amount: Math.floor(Math.random() * 1000)
    })),
    orders: Array.from({ length: 5 }, (_, i) => ({
        id: `#ORD${1000 + i}`,
        customer: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'][i],
        amount: (Math.random() * 1000).toFixed(2),
        status: Math.random() > 0.5 ? 'Completed' : 'Pending'
    }))
});

export default function Dashboard() {
    const [data, setData] = useState(generateMockData());
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(generateMockData());
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
            <Container className="py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>🛒 E-Commerce Dashboard</h2>
                    <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
                        Toggle {darkMode ? "Light" : "Dark"} Mode
                    </Button>
                </div>

                <SummaryCards stats={data.stats} />
                <SalesChart data={data.chart} />
                <RecentOrders orders={data.orders} />
            </Container>
        </div>
    );
}
