import React from 'react';
import { Layout} from 'antd';
import { Link } from 'react-router-dom';
import styles from './BasePage.module.css'

const { Header, Content, Footer } = Layout;

export function BasePage() {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <div className={styles.logo}>Restaurant Name</div>

            </Header>
            <Content className={styles.content}>
                <div className={styles.pageContent}>
                    <h1>Welcome to the Restaurant!</h1>
                    <p>Explore our menu, make reservations, and contact us for more information.</p>
                    <Link to="/waiters/list" className={styles.linkButton}>
                        Explore Our Waiters
                    </Link>
                    <Link to="/dishes/list" className={styles.linkButton}>
                        Explore Our Dishes
                    </Link>
                    <Link to="/tables/list" className={styles.linkButton}>
                        Pick Your Table right here
                    </Link>
                    <Link to="/about" className={styles.linkButton}>
                       About us
                    </Link>
                </div>
            </Content>
            <Footer className={styles.footer}>© {new Date().getFullYear()} Restaurant Name</Footer>
        </Layout>
    );
}
