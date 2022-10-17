import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState } from 'react';

import { useStore, actions } from '~/Store';
import styles from './SlideCategory.module.scss';

const cx = classNames.bind(styles);

function NewProduct(props) {
    const { data } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper-new-product')}>
            <div className={cx('wrapper-cart-new-product')}>
                <div className={cx('cart-icon-new-product')}>
                    <img src={data.image} alt={data.name} />
                </div>
                <div className={cx('cart-info-new-product')}>
                    <h3 className={cx('cart-name-new-product')}>{data.name}</h3>
                    <span className={cx('cart-discription-new-product')}>{data.discription}</span>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
