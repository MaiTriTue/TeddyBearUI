import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Apis, { endpoints } from '~/Apis/Apis';
import { BillBeard, BillBeardSale, SlideCategory, TrendingProduct } from '~/components/componentDetail';
import { CatagoryData, NewProductData } from '~/datas/datas';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard_slide')}>
                    <BillBeard />
                </div>
                <div className={cx('wrapper-billboard_banner')}>
                    <div className={cx('wrapper-billboard_banner-20')}>
                        <BillBeardSale />
                    </div>
                    <div className={cx('wrapper-billboard_banner-15')}>
                        <BillBeardSale />
                    </div>
                </div>
            </div>

            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <SlideCategory type="category" title="Danh mục" datas={CatagoryData} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <SlideCategory type="NewProduct" title="Sản phẩm mới" datas={NewProductData} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <TrendingProduct type="TrendingProduct" title="Gấu Bông Hot Nhất" data={NewProductData} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <TrendingProduct type="BestSellingProduct" title="Hộp Quà Hot Nhất" data={NewProductData} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <TrendingProduct type="BestSellingProduct" title="Hoa Hot Nhất" data={NewProductData} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}></div>
            </div>
        </div>
    );
}

export default Home;
