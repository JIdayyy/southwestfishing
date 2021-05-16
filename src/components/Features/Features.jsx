import React from "react";
import "../Description/Description.css";

export default function Features({ date, setDate }) {
  return (
    <div className="w-11/12 h-5/6   border-b-2 flex flex-col border-white text-8xl z-40 text-white">
      <div className="w-full h-48  myborder flex flex-col justify-end ">
        <div className="text-white  absolute transform translate-x-20 text-xl font-scada my-4">
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </div>
      </div>
      <div className="w-full h-full flex border-r-2 border-white items-center justify-center align-middle ">
        <div className="bg-black containerOpacity p-10 bg-opacity-75 w-10/12 h-5/6 flex items-center justify-around align-middle rounded-xl">
          <div className="w-full text-2xl flex flex-col items-center align-middle justify-center text-center mx-7">
            <h1>Barque</h1>
            <p className="text-xs">
              A quelques kilomètres de l’océan, non loin de Capbreton, se trouve
              l’étang blanc . Au milieu des Pins maritimes et des tones de
              chasse je vous propose de venir à la recherche du « maître des
              lieux », le brochet les meilleurs périodes sont les mois de mai,
              juin, fin septembre, octobre et novembre.
            </p>
            <img
              src="./src/img/barque.jpg"
              className=" my-10 rounded-xl w-4/5"
              alt=""
            />
          </div>
          <div className="w-full text-2xl flex flex-col items-center align-middle justify-center text-center mx-7">
            <h1>Float Tube</h1>
            <p className="text-xs">
              Venez découvrir cette approche de la pêche de façon ludique et
              sécurisé qui vous ouvrent les portes de nouvelles zones de pêches
              inaccessibles du bord. C’est l’opportunité d’ une expérience de
              pêche unique, au plus près de la nature avec des émissions de co²
              proche de zéro. Ce type de stage est un bon moyen de vous faire
              une idée sur l’utilisation d ‘un float tube avant d’en acheter un.
            </p>
            <img
              src="./src/img/floattube.jpg"
              className=" my-10 rounded-xl w-4/5"
              alt=""
            />
          </div>
          <div className="w-full text-2xl flex flex-col items-center align-middle justify-center text-center mx-7">
            <h1>Wadding</h1>
            <p className="text-xs">
              Venez découvrir ou vous perfectionner, aux leurres ou au « toc »
              sur le bassin de la Nivelle et des Nives à la recherche des ses
              truites sauvages. Des stages de pêche sur les lacs de sont aussi
              envisageables sur demande.
            </p>
            <img
              src="./src/img/wadding.jpg"
              className=" my-10 rounded-xl w-4/5"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
