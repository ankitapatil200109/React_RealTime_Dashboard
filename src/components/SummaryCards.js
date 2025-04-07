// src/components/SummaryCards.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const SummaryCards = ({ stats }) => (
    <Row className="mb-4">
        {stats.map((stat, idx) => (
            <Col md={3} key={idx}>
                <Card className="text-center shadow-sm">
                    <Card.Body>
                        <h6 className="text-muted">{stat.label}</h6>
                        <h4>{stat.value}</h4>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
);

export default SummaryCards;
