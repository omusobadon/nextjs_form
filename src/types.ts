//会員ログイン

import internal from "stream";

//import internal from "stream";


//予約POST

export interface OrderPost {

    customer_id: number;
    start_at: string;
    end_at: string;
    remark: string;
    detail: [{   
            stock_id:number;
            qty: number;
        }]
}

//予約GET

export interface StockGet {

    id: number;
    price_id: number;
    name: string;
    qty: number;
    start_at: string;
    end_at: string;
    is_enable: string;
}

    export interface PriceGet {

    id: number;
    product_id: number;
    name: string;
    value: number;
    tax: number;
    remark: string
}

//予約


//お問い合わせ

export interface Inquiry {

    id: string;
    Lname: string;
    Fname: string;
    Email: string;
    purpose: string;
    massage: string;
} 