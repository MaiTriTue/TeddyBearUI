import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styles from './ProDetailPage.module.scss';
import images from '~/assets/images';
import Apis, { endpoints } from '~/Apis/Apis';
import { check, delivery, money, shop, telephone } from '~/assets/iconVector';
import { useStore, actions } from '~/Store';

const cx = classNames.bind(styles);

function ProDetailPage() {
    const { slugPro, idPro } = useParams();
    const navigate = useNavigate();
    const [detailPro, setDetailPro] = useState('');
    const [state, dispatch] = useStore();
    const { cartProduct } = state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        Apis.get(endpoints['products'] + idPro + '/').then((res) => {
            console.log(res.data);
            setDetailPro(res.data);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    }, [cartProduct]);

    const HandleMessage = () => {
        alert('click message !');
    };

    const HandleAddCart = (data) => {
        dispatch(
            actions.setCartProduct([
                ...cartProduct,
                {
                    ...data,
                    count: 1,
                },
            ]),
        );
    };

    return (
        <div className={cx('wrapper')}>
            {detailPro ? (
                <div className={cx('wrapper-detail')}>
                    <div className={cx('wrapper-detail_imgs')}>
                        <img src={detailPro.image} alt={detailPro.slug} className={cx('pro-img')} />
                    </div>
                    <div className={cx('wrapper-detail_info')}>
                        <div className={cx('info-product_name')}>
                            <h3>{detailPro.name}</h3>
                        </div>
                        <div className={cx('info-product_price')}>
                            <h4>{detailPro.price}</h4>
                        </div>
                        <div className={cx('info-product_disc')}>
                            <span>{detailPro.discription}</span>
                        </div>
                        <div className={cx('info-product_btns')}>
                            <button
                                className={cx('btn-message')}
                                onClick={() => {
                                    HandleMessage();
                                }}
                            >
                                {' '}
                                Chat Facebook
                            </button>

                            <button className={cx('btn-add-cart')} onClick={() => HandleAddCart(detailPro)}>
                                Th??m gio?? ha??ng
                            </button>
                        </div>
                        <div className={cx('info-order')}>ho???c g???i hotline ????? ?????t h??ng 0989.348.280</div>
                        <div className={cx('info-product_benefit')}>
                            <div className={cx('benefit-blog')}>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Mi???n ph?? b???c qu??
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    T???ng thi???p mi???n ph??
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    H??t ch??n kh??ng mi???n ph??
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    ?????i h??ng mi???n ph??
                                </span>
                            </div>
                            <div className={cx('benefit-blog')}>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Ko x??, ko r???ng, ko phai
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    ????ng h??nh ???nh, ????ng size
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Cam k???t gi?? lu??n t???t nh???t
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Ko ?????p ho??n ti???n 100%
                                </span>
                            </div>
                        </div>
                        <div className={cx('info-product_contacts')}>
                            <div className={cx('contacts-info_blog')}>
                                <span>
                                    <img src={delivery} alt="check" className={cx('icon-contack')} />
                                    Giao h??ng TQ - Nh???n h??ng thanh to??n
                                </span>
                                <span>
                                    <img src={money} alt="check" className={cx('icon-contack')} />
                                    Ti???n m???t - Chuy???n kho???n
                                </span>
                            </div>
                            <div className={cx('contacts-info_blog')}>
                                <span className={cx('contacts-info_blog-red')}>
                                    <img src={telephone} alt="check" className={cx('icon-contack')} />
                                    0969 024 369 - 0969 024 369 (zalo)
                                </span>
                                <span>
                                    <img src={shop} alt="check" className={cx('icon-contack')} />
                                    C???a H??ng G????u B??ng Xinh - Minh S??n - Tri????u S??n - Thanh Ho??a
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h3>??ang load ...</h3>
            )}

            <div className={cx('wrapper-info_detail')}>
                <div className={cx('wrapper-info_title')}>
                    <h3>TH??NG TIN S???N PH???M</h3>
                </div>
                <div className={cx('wrapper-info_content')}></div>
            </div>
        </div>
    );
}

export default ProDetailPage;
