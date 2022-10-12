import React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Warning404.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Warning404() {
    const navigate = useNavigate();

    const HandleMoveHome = () => {
        navigate('/');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-warning')}>
                <div className={cx('wrapper-warning_code')}>
                    <h1>404</h1>
                </div>
                <div className={cx('wrapper-warning_content')}>
                    <h2>Trang này đã bị xóa hoặc không tồn tại!</h2>
                    <h4>Items not found</h4>
                </div>
                <div className={cx('wrapper-warning_home-btn')}>
                    <button className={cx('btn')} onClick={HandleMoveHome}>
                        Trang chủ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Warning404;
