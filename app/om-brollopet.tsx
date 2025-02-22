export default function OmBrollopet(props: {
  gotoPage: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    page: string
  ) => void;
}) {
  return (
    <>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]">
        <h2 className="text-xl my-1">Om Bröllopet</h2>
        <p>
          Ja hörni, nu är det äntligen dags!
          <br />
          Egentligen så har ju ringarna utbytts redan för länge sedan, men så
          var det ju det här med bröllop också. För såklart ska det vara en
          hejdundrande fest också, eller hur?
        </p>
        <div className="flex flex-row justify-center w-full my-2">
          <div className="bg-[url(/images/img1.jpg)] bg-cover w-40 h-40"></div>
          <div className="bg-[url(/images/img2.jpg)] bg-cover w-40 h-40"></div>
          <div className="bg-[url(/images/img3.jpg)] bg-cover w-40 h-40"></div>
        </div>
      </div>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]">
        <p>
          <b>Tid:</b> Vi börjar vid 14:30 med fika och lekar i det gröna. Sedan
          blir det middag och andra upptåg in på småtimmarna.
        </p>
        <p>
          <b>Klädsel:</b> Fri klädsel! Kom i det du känner dig fin i! Gärna
          folkdräkt om du har! (Senare på kvällen kan det mycket väl bli lekar
          som kräver rörelse, så ett ombyte kan vara bra att ta med.)
        </p>
        <p>
          <b>Barn:</b> Vide och Alve vill gärna ha sällskap av andra barn på
          bröllopet! Det kommer att bli lekar och finnas saker att göra för de
          små under dagen och tidig kväll. Ring oss gärna så kan vi klura ut den
          bästa lösningen för senare på kvällen!
        </p>
        <p>
          <b>Resa & Boende:</b> Reser gör du enklast med bil eller tåg. Vid
          tillräckligt intresse fixar vi gemensam transport mellan Hudiksvall,
          Forsa, Näsviken och Bygdegården.
          <br />
          Mer info kommer under{" "}
          <a href="#" onClick={(e) => props.gotoPage(e, "resa")}>
            Resa & Boende
          </a>
        </p>
        <p>
          <b>Anmälan</b> Anmäl er <b>senast den 16e Juni</b>! Se{" "}
          <a
            href="https://ext.nytatime.se/register/?race=NLcG2jxFwGxtKtXGa&l=se"
            onClick={(e) => props.gotoPage(e, "anmalan")}
          >
            Anmälan
          </a>
          .
        </p>
        <p>PM med fler detaljer publiceras senare!</p>
      </div>
    </>
  );
}
