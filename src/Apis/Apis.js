import axios from 'axios';

export let endpoints = {
    login: '/account/login/',
    get_token: '/o/token/',

    pageCount: '/?page=',
    newProduct: '/new-products/',
    bouquetHot: '/bouquet-hot/',
    teddyBearHot: '/teddy-bear-hot/',
    giftBox: '/gift-box-hot/',
    gauBong: '/gau-bong/',
    thuBong: '/thu-bong/',
    goiBong: '/goi-bong/',
    gauBongHoatHinh: '/gau-bong-hoat-hinh/',
    bupBe: '/bup-be/',
    phuKien: '/phu-kien/',
    hoa: '/hoa/',
    hopQua: '/hop-qua/',
};

export default axios.create({
    baseURL: 'http://127.0.0.1:8000',
});
