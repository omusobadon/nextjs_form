'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderImage from "../../public/img/header.png";
import { useSession, signOut, signIn } from "next-auth/react";

export function Header() {
  const { data: session, status } = useSession();

  return (
    <>
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Link href={"/"}>
                <Image
                  src={HeaderImage}
                  alt="Header"
                  className="w-14 h-auto p-2 rounded-full"
                />
              </Link>
              <Link href={"/"}>
                <span className="ml-3 text-xl">オムそばレンタカー</span>
              </Link>
            </div>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <Link href={"/shop"} className="mr-5 hover:text-gray-900">
                店舗検索
              </Link>

              <Link href={"/car"} className="mr-5 hover:text-gray-900">
                料金と車種
              </Link>

              <Link href={"/Inquiry"} className="mr-5 hover:text-gray-900">
                お問い合わせ
              </Link>
            </nav>
            {session ? (
              <button
                onClick={() => signOut()}
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Logout
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
