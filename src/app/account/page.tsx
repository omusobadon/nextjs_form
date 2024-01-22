"use client";
import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { checkEmail } from "@/lib/apidata";

export default function Home() {

  const { data: session, status } = useSession();


  const Detalis = () => {
    console.log(session);
  };

  return (
    <div className="h-screen">
      {session && (
        <div>
          <h1>ようこそ, {session.user?.email}</h1>
          <p>あなたの名前は{session.user?.name}です</p>
          {session.user?.image && (
            <Image src={session.user.image} alt="User Image" />
          )}

          <button onClick={() => Detalis()}>詳細</button>
          <button onClick={() => signOut()}>ログアウト</button>
          <Link href={"/"}>
                <span className="ml-3">戻る</span>
              </Link>
        </div>
      )}
    </div>
  );
}
