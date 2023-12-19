//会員ログイン

import internal from "stream";

//import internal from "stream";


//予約POST

export interface OrderPost {
    customer: number;
    product: number;
    start: string;
    end: string;
    num: number;
}

//予約GET

export interface OrderGet {

    "id": number;
    "name": string;
    "value": number;
    "num": number;
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