export default function Anmalan() {
  return (
    <>
      <div className="m-4 text-left text-section mx-auto max-w-[50em]">
        <h2 className="text-xl my-1">Anmälan</h2>

        <p>Anmäl dig genom att fylla i formuläret nedan!</p>

        <p>
          Obs! När du anmäler dig, fyll i alla deltagare (både vuxna och barn)!
        </p>
      </div>
      <iframe
        src="https://ext.nytatime.se/register/?race=NLcG2jxFwGxtKtXGa&l=se"
        className="-mx-4 h-[100vh]"
      />
    </>
  );
}
