import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';

import styles from './CartPage.module.scss';
import images from '~/assets/images';
import Apis, { endpoints } from '~/Apis/Apis';
import { useStore, actions } from '~/Store';
import { NewProductData } from '~/datas/datas';

const cx = classNames.bind(styles);

function CartPage() {
    const [state, dispatch] = useStore();
    const { cartProduct } = state;
    const [countProduct, setCountProduct] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);

    const handleMinusCount = () => {
        if (countProduct === 0) {
            setCountProduct(0);
        } else {
            setCountProduct(countProduct - 1);
        }
    };
    const handleAddCount = () => {
        setCountProduct(countProduct + 1);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-cart')}>
                <div className={cx('wrapper-cart_header')}>
                    <h3 className={cx('wrapper-cart_title')}>Giỏ Hàng</h3>
                    <span className={cx('wrapper-cart_count')}>
                        ( {cartProduct ? cartProduct.length : 0} Sản phẩm )
                    </span>
                </div>
                <div className={cx('wrapper-cart_detail')}>
                    <div className={cx('wrapper-cart_products')}>
                        <div className={cx('cart_product')}>
                            <div className={cx('cart_product-serial')}>1</div>
                            <div className={cx('cart_product-img')}>
                                <img src={NewProductData[0].icon} alt={NewProductData[0].name} />
                            </div>
                            <div className={cx('cart_product-info')}>
                                <div className={cx('cart_product-info-name')}>
                                    <h4>{NewProductData[0].name}</h4>
                                </div>
                                <div className={cx('cart_product-info-count')}>
                                    <div className={cx('product_count-product')}>
                                        <div className={cx('btn_minus')} onClick={handleMinusCount}>
                                            -
                                        </div>
                                        <span className={cx('product_btn-input')}>{countProduct}</span>
                                        <span className={cx('btn_add')} onClick={handleAddCount}>
                                            +
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('cart_product-info-price')}>
                                    <span>
                                        {isNaN(NewProductData[0].price)
                                            ? 'LIÊN HỆ'
                                            : NewProductData[0].price * countProduct + ' VND'}
                                    </span>
                                </div>
                            </div>
                            <div className={cx('cart_product-delete')}>
                                <button className={cx('product-delete_btn')}>Xóa</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper-cart_infos')}>
                        <div className={cx('wrapper-cart_info-header')}>
                            <h5 className={cx('wrapper-cart_info-title')}>Chi tiết thanh toán</h5>
                        </div>
                        <div className={cx('wrapper-cart_info')}>
                            <div className={cx('wrapper-cart_info-total')}>
                                <span>Giá bán lẻ:</span>
                                <span>VND {priceTotal} </span>
                            </div>
                            <div className={cx('wrapper-cart_info-total')}>
                                <span>Chiết khấu ({discount}%) :</span>
                                <span>VND {(priceTotal * discount) / 100}</span>
                            </div>
                        </div>
                        <div className={cx('wrapper-cart_btn')}>
                            <div className={cx('wrapper-cart_info-grand-total')}>
                                <span>Tổng cộng:</span>
                                <span>VND {priceTotal - (priceTotal * discount) / 100} </span>
                            </div>
                            <button className={cx('cart_btn-order')}>Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
