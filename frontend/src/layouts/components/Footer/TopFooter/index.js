import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopFooter.module.scss';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);

export default function TopFooter() {
    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col xs={24} lg={12}>
                    <div className={cx('left')}>
                        <span className={cx('logo')}>
                            <img
                                className={cx('logo-img')}
                                src="https://th.bing.com/th?id=OIP.rlONxCGVjh5Z_mM4rAc_PQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                                alt="logo"
                            />
                        </span>
                        <p className={cx('text')}>
                            Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
                            vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                            tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                        </p>
                        <div className={cx('contact')}>
                            <span>Got Question? Call us 24/7</span>
                            <h4 className={cx('phone-number')}>0338968408</h4>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <div className={cx('right')}>
                        <Row>
                            <Col xs={24} sm={8}>
                                <div className={cx('widget')}>
                                    <h4 className={cx('widget__title')}>information</h4>
                                    <ul className={cx('widget__list')}>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                about us
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                contact us
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                login
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div className={cx('widget')}>
                                    <h4 className={cx('widget__title')}>Customer Service</h4>
                                    <ul className={cx('widget__list')}>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Terms and conditions
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Returns
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Shipping
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div className={cx('widget')}>
                                    <h4 className={cx('widget__title')}>My Account</h4>
                                    <ul className={cx('widget__list')}>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Sign In = '/index2.jsx'
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                View Cart
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                My Wishlist
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
