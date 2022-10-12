import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';

import styles from './Category.module.scss';
import images from '~/assets/images';
import Apis, { endpoints } from '~/Apis/Apis';
import { NewProductData, CatagoryData } from '~/datas/datas';
import { TrendingProduct, SlideCategory } from '~/components/componentDetail';

const cx = classNames.bind(styles);

function Category() {
    const { categoryItem } = useParams();
    const [DataProducts, setDataProducts] = useState('');
    const [movieSrc, setMovieSrc] = useState('');
    const [CategoryTitle, setCategoryTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        switch (categoryItem) {
            case 'hoa-hong-sap':
                setDataProducts(NewProductData);
                setCategoryTitle('Hoa Hồng Sáp ( bó )');
                break;
            case 'thu-bong':
                setDataProducts(NewProductData);
                setCategoryTitle('Thú Bông');
                break;
            case 'gau-bong-hoat-hinh':
                setDataProducts(NewProductData);
                setCategoryTitle('Gấu Bông Hoạt Hình');
                break;
            case 'goi-bong-phu-kien':
                setDataProducts(NewProductData);
                setCategoryTitle('Gối Bông & Phụ Kiện');
                break;
            case 'gau-bong':
                setDataProducts(NewProductData);
                setCategoryTitle('Gấu Bông');
                break;
            case 'hop-qua':
                setDataProducts(NewProductData);
                setCategoryTitle('Hộp Quà Tình Yêu');
                break;
            default:
                console.warn('Path does not exist !');
        }
    }, [categoryItem]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <SlideCategory type="category" title="Danh mục" datas={CatagoryData} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <TrendingProduct type="subcategory" title={CategoryTitle} data={DataProducts} />
                </div>
            </div>
        </div>
    );
}

export default Category;
