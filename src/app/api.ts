import {  Inquiry, Order } from "./types";




//購入



export const PostOrder = async (order: Order): Promise<Order> => {
    const res = await fetch("http://localhost:8080/post", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });
    const orderLog = res.json();
    console.log(orderLog)

    return orderLog;
};


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
