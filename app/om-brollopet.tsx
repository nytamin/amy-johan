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
          <div className="bg-[url(/images/img1.jpg)] bg-cover bg-center w-40 h-40"></div>
          <div className="bg-[url(/images/img2.jpg)] bg-cover bg-center w-40 h-40"></div>
          <div className="bg-[url(/images/img3.jpg)] bg-cover bg-center w-40 h-40"></div>
          <div className="bg-[url(/images/img4.jpg)] bg-cover bg-center w-40 h-40"></div>
        </div>
      </div>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]">
        <p>
          <b>Tid:</b> Vi börjar vid <b>14:30</b> med cermoni, fika och lekar i
          det gröna. Sedan blir det middag och andra upptåg in på småtimmarna.
        </p>
        <div>
          <b>Packlista:</b>
          <ul className="list-disc">
            <li>
              <b>Festkläder!</b> Det är Fri klädsel, kom i det du känner dig fin
              i! Gärna folkdräkt om du har!
            </li>
            <li>
              <b>Regnkläder</b> (vid risk för regn). Vi är utomhus stora delar av festen! 
            </li>
            <li>
              <b>Träningskläder!</b> <i>(frivilligt)</i> Om du vill vara med på
              kvällens lite mer aktiva upptåg, så packa med löpskor och
              träningskläder! (ta även med <b>pannlampa</b>!)
              <br />
              För den som bara vara med och heja på, så duger Festkläderna (med
              bekväma skor) alldeles utmärkt också!
            </li>
            <li>
              <b>Badkläder!</b> Det finns en badplats i närheten! Bruden kommer
              hoppa i minst en gång, häng på vetja!
              <br />
              Även här kan en <b>pannlampa</b> vara bra att ha.
            </li>
          </ul>
        </div>
        <p>
          <b>Barn:</b> Vide och Alve vill gärna ha sällskap av andra barn på
          bröllopet! Det kommer att bli lekar och finnas saker att göra för de
          små under dagen och tidig kväll. Ring oss gärna så kan vi klura ut den
          bästa lösningen för senare på kvällen!
        </p>
        <b>Presenter?</b> Vi har redan allt vi behöver, och mer därtill. Att få
        dela dagen med er är present nog för oss!
        <p>
          <i>
            (Ja, vi vet att Brudens mor tycker att vi behöver ett nytt köksbord,
            men det ska Brudgummen snickra själv. Och Brudgummens mor vill så
            gärna sticka fler kuddar, men Bruden behöver bara sockar just nu.
            Och vi behöver heller inte fler gjutjärnsstekpannor, eller tallrikar
            med Bodens fästning på... ;) )
          </i>
        </p>
        <p>
          <b>Resa & Boende:</b> Reser gör du enklast med bil eller tåg. Vid
          tillräckligt intresse fixar vi gemensam transport mellan Hudiksvall,
          Forsa, Näsviken och Bygdegården.
          <br />
          Mer info finns under{" "}
          <a href="#" onClick={(e) => props.gotoPage(e, "resa")}>
            Resa & Boende
          </a>
        </p>
        {/* <p>
          <b>Anmälan</b> Anmäl er <b>senast den 16e Juni</b>! Se{" "}
          <a
            href="https://ext.nytatime.se/register/?race=NLcG2jxFwGxtKtXGa&l=se"
            onClick={(e) => props.gotoPage(e, "anmalan")}
          >
            Anmälan
          </a>
          .
        </p> */}
        {/* <p>PM med fler detaljer publiceras senare!</p> */}
      </div>
    </>
  );
}
