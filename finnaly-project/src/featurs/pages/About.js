import React from 'react';
import { Typography, Card, Space } from 'antd';
import styles from './About.module.css';

const { Title, Paragraph } = Typography;

export function About() {
    return (
        <div className={styles.aboutContainer}>
            <Title level={2} className={styles.pageTitle}>About Us</Title>
            <div className={styles.contentContainer}>
                <Card className={styles.card}>
                    <Space direction="vertical">
                        <Title level={3}>Our Story</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper urna vitae purus
                            aliquam, ut varius nunc gravida. Sed a felis vel velit bibendum tincidunt. Cras euismod
                            tincidunt risus, eget ultricies massa bibendum id. In et malesuada metus, vel faucibus quam.
                            Curabitur in egestas leo, ut cursus tortor.
                        </Paragraph>
                    </Space>
                </Card>
                <Card className={styles.card}>
                    <Space direction="vertical">
                        <Title level={3}>Our Mission</Title>
                        <Paragraph>
                            Our mission is to provide exceptional dining experiences with the finest quality food and
                            service. We are committed to delighting our customers and making every visit memorable.
                        </Paragraph>
                    </Space>
                </Card>
                <Card className={styles.card}>
                    <Space direction="vertical">
                        <Title level={3}>Contact Information</Title>
                        <Paragraph>
                            Address: 123 Restaurant St, City, Country
                        </Paragraph>
                        <Paragraph>
                            Phone: +1 (123) 456-7890
                        </Paragraph>
                        <Paragraph>
                            Email: info@restaurant.com
                        </Paragraph>
                    </Space>
                </Card>
            </div>
        </div>
    );
}
