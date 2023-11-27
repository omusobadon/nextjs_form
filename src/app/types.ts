//会員ログイン

import internal from "stream";

//import internal from "stream";


//注文POST

export interface OrderPost {

    customer: number;
    product: number;
    num: number;
}

//注文GET

export interface OrderGet {

    "id": number;
    "name": string;
    "num": number;
}
//予約


//お問い合わせ

export interface Inquiry {

    id: string;
    Lname: string;
    Fname: string;
    Email: string;
    FAtel: string;
    FCtel: string;
    FLtel: string;
    CAtel: string;
    CCtel: string;
    CLtel: string;
    purpose: string;
    massage: string;
} 