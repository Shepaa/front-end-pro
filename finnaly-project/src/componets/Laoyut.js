import React from 'react';
import {Button, Layout as LayoutAntd, Space, theme} from 'antd';
import {Link, NavLink, Outlet} from 'react-router-dom';
import styles from '../App.module.css';

const {
    Header,
    Content,
    Footer
} = LayoutAntd;

export function Layout() {
    const active = ({ isActive }) => (isActive ? styles.active : '');
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <LayoutAntd>
            <Header style={{ background: '#ffffff', padding: '0', borderBottom: '1px solid #e8e8e8' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Space size={20}>
                        <NavLink to="/waiters/list" className={active}>
                            Waiters
                        </NavLink>
                        <NavLink to="/tables/list" className={active}>
                            Tables
                        </NavLink>
                        <NavLink to="/dishes/list" className={active}>
                            Dishes
                        </NavLink>
                        <NavLink to="/orders/list" className={active}>
                            Orders
                        </NavLink>
                        <NavLink to="/about" className={active}>
                            About
                        </NavLink>
                    </Space>
                </div>
            </Header>
            <Content>
                <div style={{ background: colorBgContainer, minHeight: '80vh', padding: '20px' }}>
                   <Link to='/'>
                       <Button type='primary' style={{float:'right'}}>Go Home</Button>
                   </Link>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} Restaurant Name</Footer>
        </LayoutAntd>
    );
}
