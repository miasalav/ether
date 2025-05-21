"use client";
declare global {
  interface Window {
    VANTA: any;
    _strk: any;
    edit_page: any;

  }

  var VANTA: any;
}
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Marquee from "./components/Marquee";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  const openModal = (index: number) => {
    setActiveProject(index);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
      setActiveProject(null);
    }, 300); // Match blow-down animation duration
  };

  const handleClick = () => {
    // Trigger fade-out by setting the flag
    setHideIntro(true);

    // After the fade-out animation, set display to none
    setTimeout(() => {
      const el = document.getElementById("intro-bg");
      if (el) el.style.display = "none";
    }, 1500); // Match the transition duration (in ms)
  };

  useEffect(() => {
    const setVanta = () => {
      if (typeof window !== "undefined" && window.VANTA) {
        VANTA.FOG({
          el: "#main",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xaa8a9a,
          midtoneColor: 0x917278,
          lowlightColor: 0x782e73,
          baseColor: 0x111111,
          blurFactor: 0.82,
          speed: 1.70,
          zoom: 0.30
        })
      }
    };

    // Check if _strk and edit_page exist before using them
    if (typeof window !== "undefined" && window._strk && window.edit_page?.Event) {
      window._strk.push(() => {
        setVanta();
        window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
      });
    } else {
      // Fallback for testing or if _strk is not defined
      setVanta();
    }
  }, []);

  return (
    <>
      <div className="relative h-full">
        <div id="intro-bg" className={`fixed bg-white h-full w-full flex justify-center items-center z-20 flex-col transition-opacity duration-1500 ${
        hideIntro ? "opacity-0" : "opacity-100"
      }`}>
          <Image src="/images/ether-flowers.jpg" className="float" alt="Profile" width={200}  height={70} sizes="100vw" />
          <a onClick={handleClick} className="animate-pulse cursor-pointer inline-block text-black text-[20px] font-normal hover:font-bold hover:tracking-[2px] transition-all duration-600">ˢᵗᵉᵖ ⁱⁿᵗᵒ ᵗʰᵉ ₑₜₕₑᵣ ...</a>
        </div>
        <main className="relative h-screen" id="main">
          <section className="w-full flex justify-center h-full">
            <div className="container flex justify-center items-center flex-col">
              <Image src="/images/ether-logo-texturized.png" className="throb" alt="Profile" width={250}  height={70}  />
              <p className="text-white throb">ᵘⁿᵈᵉʳ ᶜᵒⁿˢᵗʳᵘᶜᵗⁱᵒⁿ...</p>
              <div className="max-w-[350px] w-full flex justify-center items-center flex-col mt-4">
                <Marquee />
                {/* <h3 className="text-[20px] font-bold tracking-[-1px]">PAST EVENTS</h3> */}
                <a className="hover:tracking-[1px] transition-all duration-600 text-[12px]" href="https://ra.co/events/2139503">001: Sister Zo, Honeydrip, MIASALAV, Asha, Runa</a>
              </div>
            </div>
          </section>
          {modalOpen && (
          <div className="fixed inset-0 flex bg-black/75 justify-center items-center z-50">
             <div
               className={`bg-black border border-white w-[90%] max-w-[600px] relative ${
                 isClosing ? 'blow-down' : 'blow-up'
               }`}
             >
                <div className="modal-top-bar relative border-b border-white h-[32px]">
                  <button
                    onClick={closeModal}
                    className="absolute top-1 right-2 text-white font-bold cursor-pointer"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-content p-6 max-h-[700px] overflow-y-scroll scrollbar-hide">
                  {activeProject === 0 && (
                  <div></div>
                  )}
                  {activeProject === 1 && (
                  <div></div>

                  )}
                </div>
              </div>
            </div>
          )}
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-6">
          <p className="text-[10px] text-center font-bold monument-regular ">COPYRIGHT © ETHER 2025</p>
        </footer>
      </div>
    </>
  );
}
