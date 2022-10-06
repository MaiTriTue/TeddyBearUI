import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState } from 'react';

import { useStore, actions } from '~/Store';
import styles from './TrendingProduct.module.scss';
import ProductCart from '~/components/componentDetail/ProductCart';

const cx = classNames.bind(styles);

function TrendingProduct(props) {
    const { type, title, data } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-trending-product')}>
                <div className={cx('trending-product_header')}>
                    <h2 className={cx('trending-product_header-title')}>{title}</h2>
                </div>
                <div className={cx('trending-product_body')}>
                    {data &&
                        data.map((item, index) => {
                            if (type === 'TrendingProduct') {
                                if (index < 12) {
                                    return (
                                        <div className={cx('product-cart')} key={index}>
                                            <ProductCart data={item} />
                                        </div>
                                    );
                                }
                            }
                            if (type === 'BestSellingProduct') {
                                if (index < 12) {
                                    return (
                                        <div className={cx('product-cart')} key={index}>
                                            <ProductCart data={item} />
                                        </div>
                                    );
                                }
                            }
                        })}
                </div>
            </div>
        </div>
    );
}

export default TrendingProduct;
