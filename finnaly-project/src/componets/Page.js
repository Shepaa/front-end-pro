import React from 'react'
import { Typography, Row, Col } from 'antd'

const { Title } = Typography

export function Page ({ children, title }) {
    return (
        <>
            <Row justify="center">
                <Col>
                    <Title>{title}</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    {children}
                </Col>
            </Row>
        </>
    )
}