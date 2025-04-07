// src/components/RecentOrders.js
import React from 'react';
import { Table, Card } from 'react-bootstrap';

const RecentOrders = ({ orders }) => (
    <Card className="shadow-sm">
        <Card.Body>
            <h5 className="mb-3">Recent Orders</h5>
            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Customer</th>
                        <th>Amount ($)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, idx) => (
                        <tr key={idx}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.amount}</td>
                            <td><span className={`badge bg-${order.status === 'Completed' ? 'success' : 'warning'}`}>{order.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card.Body>
    </Card>
);

export default RecentOrders;
