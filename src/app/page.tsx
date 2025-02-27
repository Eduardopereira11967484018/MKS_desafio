"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import { CartContext, CartProvider } from "@/context/CartContext";
import { useContext } from "react";


export default function Home() {

  return (
    <>
    <Header/>
    <main className="w-full flex justify-center items-center pt-[80px] lg:pt-0 flex-1">
      <Products/> 
     <Sidebar/>
     </main>
    <Footer/>
    </>
  );
} 
