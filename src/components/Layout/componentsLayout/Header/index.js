import React, { useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Vector, searchIcon, cartIcon, couponCode, userIcon, wishlists } from '~/assets/iconVector';
import { useStore, actions } from '~/Store';
import NabbarList from './NavbarList';
import MobileHeader from './MobileHeader';
import { useRef } from 'react';
import logo from '../../../../logo.svg';

const cx = classNames.bind(styles);

const menus = [
    { url: '/', content: 'Trang chủ' },
    { url: '/', content: 'Cửa hàng' },
    { url: '/', content: 'Page' },
    { url: '/', content: 'Dịch vụ' },
    { url: '/', content: 'Blog' },
    { url: '/', content: 'Liên hệ' },
    { url: '/', content: 'Ưu đãi' },
];

function Header() {
    const [active, setActive] = useState(0);
    // // const [screenWidth, setScreenWidth] = useState(0);
    // const [numberMenu, setNumberMenu] = useState(9);
    const [indexMenu, setIndexMenu] = useState(0);
    const navigate = useNavigate();
    // const mobileMenuRef = useRef(null);
    const [state, dispatch] = useStore();
    const { cartProduct } = state;
    let activeMenu;
    // let laptopWidth = 1280;
    // let tabletWidth = 1024;
    // let mobileWidth = 768;

    // useEffect(() => {
    //     dispatch(actions.setMenu(menus));
    // }, [menus]);

    // useEffect(() => {
    //     if (active === 0) {
    //         navigate('/');
    //     }
    // }, [active]);

    // useEffect(() => {
    //     const resizeWindow = (event) => {
    //         if (window.innerWidth < mobileWidth) {
    //             //
    //         } else if (window.innerWidth < tabletWidth && window.innerWidth > mobileWidth) {
    //             setNumberMenu(7);
    //         } else if (
    //             window.innerWidth < laptopWidth &&
    //             window.innerWidth > tabletWidth &&
    //             window.innerWidth > mobileWidth
    //         ) {
    //             setNumberMenu(8);
    //         } else {
    //             setNumberMenu(9);
    //         }
    //     };
    //     window.addEventListener('resize', resizeWindow);

    //     return () => {
    //         window.removeEventListener('resize', resizeWindow);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (window.innerWidth < mobileWidth) {
    //         //
    //     } else if (window.innerWidth < tabletWidth && window.innerWidth > mobileWidth) {
    //         setNumberMenu(7);
    //     } else if (
    //         window.innerWidth < laptopWidth &&
    //         window.innerWidth > tabletWidth &&
    //         window.innerWidth > mobileWidth
    //     ) {
    //         setNumberMenu(8);
    //     } else {
    //         setNumberMenu(9);
    //     }
    // }, [window.innerWidth]);

    // useEffect(() => {
    //     if (indexMenu > numberMenu) {
    //         let value;
    //         for (let i = 0; i < menus.length; i++) {
    //             for (let j = 0; j < menus.length; j++) {
    //                 if (i === numberMenu && j === indexMenu) {
    //                     value = menus[i];
    //                     menus[i] = menus[j];
    //                     menus[j] = value;
    //                 }
    //             }
    //         }
    //         dispatch(actions.setMenu(menus));
    //         setActive(numberMenu);
    //     } else {
    //         setActive(indexMenu);
    //     }
    // }, [indexMenu]);

    const HandleActive = (index) => {
        setIndexMenu(index);
    };
    const HandleLogin = () => {
        setIndexMenu(-1);
        navigate('/dang-nhap');
    };
    // const HandleChangeIndex = (index) => {
    //     setIndexMenu(index);
    // };

    // const handleClickMobileMenu = () => {
    //     mobileMenuRef.current.style.display = 'block';
    // };
    // const handleClickMobileModelNavbar = () => {
    //     mobileMenuRef.current.style.display = 'none';
    // };
    // const handleClickMobileNavbarItem = () => {
    //     mobileMenuRef.current.style.display = 'none';
    //     // navigate(urlItem);
    // };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('wrapper-header')}>
                    <div className={cx('wrapper-header_logo-search')}>
                        <div className={cx('wrapper-header_logo')}>
                            <div className={cx('wrapper-header_logo-img')}>
                                <img src={images.logoPrimary} alt="logo-shop" />
                            </div>
                            {/* <div className={cx('wrapper-header_logo-name')}>
                                <div className={cx('wrapper-header_logo-name-title')}>
                                    <p>GAUBONG</p>
                                    <p>XINH</p>
                                </div>
                                <p className={cx('wrapper-header_logo-name-slogan')}>TEDDY BEAR STORE</p>
                            </div> */}
                        </div>
                        <div className={cx('wrapper-header_search')}>
                            <div className={cx('wrapper-header_search-selecte')}>
                                <select>
                                    <option className={cx('search-selecte_option')}>all categories</option>
                                </select>
                            </div>

                            <div className={cx('wrapper-header_search-rectangle')}></div>
                            <div className={cx('wrapper-header_search-input')}>
                                <input type="text" placeholder="Search for more than 20,000 products" />
                                <img src={searchIcon} alt="search-icon" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper-header_support-user')}>
                        <div className={cx('wrapper-header_support')}>
                            <p>For support ?</p>
                            <p>0969024369</p>
                        </div>
                        <div className={cx('wrapper-header_user-interactive')}>
                            <div className={cx('wrapper-header_login')} onClick={HandleLogin}>
                                <img src={userIcon} alt="user-icon" />
                            </div>
                            <div className={cx('wrapper-header_wishlists')} onClick={() => HandleActive(-1)}>
                                <img src={wishlists} alt="wishlists" />
                                <span>22</span>
                            </div>
                            <div className={cx('wrapper-header_cart')}>
                                <Link
                                    to={'/gio-hang'}
                                    className={cx('wrapper-header_cart-icon')}
                                    onClick={() => HandleActive(-1)}
                                >
                                    <img src={cartIcon} alt="cartIcon" />
                                    <span>{cartProduct.length}</span>
                                </Link>
                                <div className={cx('wrapper-header_cart-price')}>
                                    <p>your cart</p>
                                    <p>
                                        VND<span>1290000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-setarator')}></div>
                <div className={cx('wrapper-navbar')}>
                    <div className={cx('wrapper-navbar_nav')}>
                        <select className={cx('wrapper-navbar_nav-departments')}>
                            <option>shop by departments</option>
                        </select>
                        <ul className={cx('wrapper-navbar_nav-list')}>
                            {menus &&
                                menus.map((item, index) => {
                                    activeMenu = indexMenu === index ? 'active' : '';
                                    return (
                                        <li className={cx(activeMenu)} onClick={() => HandleActive(index)} key={index}>
                                            <Link to={item.url}>{item.content}</Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div className={cx('wrapper-navbar_coupon-code')}>
                        <div className={cx('coupon-code_img')}>
                            <img src={couponCode} alt="Get your coupon code" />
                        </div>
                        <p>Get your coupon code</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
