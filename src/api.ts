import {  Inquiry, StockGet, PriceGet ,OrderPost } from "./types";



//予約情報送信

export const PostOrder = async (orderpost: OrderPost): Promise<OrderPost> => {
    const res = await fetch('http://localhost:8080/post_order',{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderpost),
    });
    const orderLog = res.json();
    
    return orderLog;
};

//在庫情報取得


export const GetStock = async (): Promise<StockGet[]> => {
    const res = await fetch('http://localhost:8080/get_stock', {
    cache: "no-store"
     });
    const ordergetLog =  res.json();

    return ordergetLog;
};






export const getPrice = async (): Promise<PriceGet[]> => {
    const res = await fetch('http://localhost:8080/get_price?id=1', { cache: "no-store" });
    const ordergetLog =  res.json();

    return ordergetLog;
};



//お問い合わせ

export const PostInquiry = async (inquiry: Inquiry): Promise<Inquiry> => {
    const res = await fetch('http://localhost:8080/post_order', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiry),
    });
    const inquiryLog = res.json();

    return inquiryLog;
};
