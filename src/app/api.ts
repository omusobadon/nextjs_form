import {  Inquiry, OrderGet, OrderPost } from "./types";



//購入

export const PostOrder = async (orderpost: OrderPost): Promise<OrderPost> => {
    const res = await fetch("{POST先URL}", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderpost),
    });
    const orderLog = res.json();

    return orderLog;
};

//在庫情報取得


export const GetOrder = async (): Promise<OrderGet[]> => {
    const res = await fetch(`http://localhost:8080/get`, { cache: "no-store" });
    
    const ordergetLog = await res.json();
    return ordergetLog;
}



//お問い合わせ

export const PostInquiry = async (inquiry: Inquiry): Promise<Inquiry> => {
    const res = await fetch("http://localhost:3030/Inquirys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiry),
    });
    const inquiryLog = res.json();

    return inquiryLog;
};
