/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";
import ServiceCard from "../components/ServiceCard";
import Testimnal from "../components/Testimnal";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <NavComponent />
      <div className="container mx-auto">
        <Hero />
        <CallToAction />
        <ServiceCard />
        <Testimnal />
      </div>
      <Footer />
    </div>
  );
}