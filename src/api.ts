import {  Inquiry, StockGet, PriceGet ,OrderPost } from "@/types";



//予約情報送信

export const PostOrder = async (orderpost: OrderPost): Promise<OrderPost> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post_order`,{
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_stock`, {
    cache: "no-store"
     });
    const ordergetLog =  res.json();

    return ordergetLog;
};






export const getPrice = async (): Promise<PriceGet[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_price`, { cache: "no-store" });
    const ordergetLog =  res.json();

    return ordergetLog;
};



//お問い合わせ

export const PostInquiry = async (inquiry: Inquiry): Promise<Inquiry> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiry),
    });
    const inquiryLog = res.json();

    return inquiryLog;
};
