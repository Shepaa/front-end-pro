import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const { Title, Paragraph } = Typography;

export function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <Title level={2} className={styles.pageTitle}>404 - Page Not Found</Title>
            <Paragraph className={styles.errorText}>
                Oops, it looks like you've taken a wrong turn. The page you're looking for doesn't exist.
            </Paragraph>
            <Link to="/">
                <Button type="primary">Go Home</Button>
            </Link>
        </div>
    );
}
