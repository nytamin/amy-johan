export default function OmOss() {
  return (
    <>
      <div className="m-4 text-left text-section mx-auto max-w-[40em]">
        <h2 className="text-xl my-1">Om Oss</h2>
        <p>
          <b>Johan</b> är brudgummen.
        </p>
        <p>
          <b>Amy</b> är bruden.
        </p>
        <p>Mer info kommer senare!</p>
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
