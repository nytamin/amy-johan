export default function OmOss() {
  return (
    <>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]">
        <h2 className="text-xl my-1">Om Oss</h2>

        <div>
          <ul>
            <li>
              <b>Johan</b> är brudgummen.
            </li>
            <li>
              <b>Amy</b> är bruden.
            </li>
          </ul>
        </div>
          <p>
            <b>Toastmasters</b> är Joakim Nyman och Elias Rankka, om ni önskar hålla tal eller annat spex får ni gärna kontakta:
            <i> Joakim.nyman93@gmail.com</i> eller <i> elias.rankka@gmail.com </i>
          </p>
        <p>
          <i>
            Vill du fylla på något mer här?
            <br />
            Den här sidan är open source, så du kan{" "}
            <a href="https://github.com/nytamin/amy-johan/blob/main/app/om-oss.tsx">
              öppna en Pull Request på GitHub!
            </a>
          </i>
        </p>
        <p></p>
        <div className="flex flex-row justify-center w-full my-2">
          <div className="bg-[url(/images/img1.jpg)] bg-cover w-40 h-40"></div>
          <div className="bg-[url(/images/img2.jpg)] bg-cover w-40 h-40"></div>
          <div className="bg-[url(/images/img3.jpg)] bg-cover w-40 h-40"></div>
        </div>
      </div>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]"></div>
    </>
  );
}
