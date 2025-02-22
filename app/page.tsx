"use client";
import Image from "next/image";
import OmBrollopet from "./om-brollopet";
import React from "react";
import Resa from "./resa";
import Anmalan from "./anmalan";
import OmOss from "./om-oss";

export default function Home() {
  const [page, setPage] = React.useState("");
  React.useEffect(() => {
    setPage(window.localStorage.getItem("page") ?? "");
  }, []);
  const gotoPage = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: string) => {
      e.preventDefault();
      setPage(page);
      window.localStorage.setItem("page", page);
    },
    []
  );
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen lg-p-10  font-[family-name:var(--playfair)]">
      <main className="container flex flex-col gap-8 row-start-2 items-center ">
        <div className="container-fill1 text-center p-5 pt-10 pb-20 w-full">
          <div className="container-bg">
            <img src="/bg-right.svg" className="bg-right1" />
            <img src="/bg-right2.svg" className="bg-right2" />
            <img src="/bg-left.svg" className="bg-left1" />
          </div>
          <div className="container-content w-full text-center flex flex-col ">
            <div className="font-[family-name:var(--island-moments)] text-6xl">
              Johan & Amy
            </div>
            <div className="text-center m-1">
              <p>16 Augusti 2025</p>
              <p>Gammelsträng, Hälsingland</p>
            </div>
            <div className="flex flex-row justify-center max-w-[30em] mx-auto navigation">
              <a
                className="m-2"
                href="#"
                onClick={(e) => gotoPage(e, "om-brollopet")}
              >
                Om Bröllopet
              </a>
              <a className="m-2" href="#" onClick={(e) => gotoPage(e, "resa")}>
                Resa & Boende
              </a>
              <a className="m-2" href="#" onClick={(e) => gotoPage(e, "omoss")}>
                Om oss
              </a>
              <a
                className="m-2"
                href="#"
                onClick={(e) => gotoPage(e, "anmalan")}
              >
                Anmälan
              </a>
            </div>

            {page === "resa" ? (
              <Resa />
            ) : page === "anmalan" ? (
              <Anmalan />
            ) : page === "omoss" ? (
              <OmOss />
            ) : (
              <OmBrollopet gotoPage={gotoPage} />
            )}

            <div className="location-container -mx-5">
              <div className="location-top"></div>
              <div className="location-bottom"></div>
              <Image
                src="/images/location.jpg"
                alt=""
                width={876}
                height={598}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
