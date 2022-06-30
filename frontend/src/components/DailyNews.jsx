import React from "react";
import "tw-elements";

function DailyNews() {
  return (
    <div
      className="flex justify-center my-20"
      style={{
        backgroundColor: "#e89759",
      }}
    >
      <div
        id="carouselExampleIndicators"
        className="flex justify-center w-full m-10 carousel relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-0">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          />
        </div>
        <div className="w-3/4 carousel-inner relative overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <div>
              <p className="mb-10" style={{ padding: "5px", height: "100px" }}>
                News Formation:
                <br />
                Formation intensive à l'anglais commercial toute la semaine
                prochaine! Pensez à réserver vos places obligatoires.
              </p>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <div>
              <p
                className="w-full mb-10"
                style={{ padding: "5px", height: "100px" }}
              >
                News RH:
                <br />
                notre nouvelle alternante arrive demain. Pensez à saluer Wendy
                qui rejoint l'équipe dev-front de Montréal.
              </p>
            </div>
          </div>
          <div className="mb-10 carousel-item float-left w-full">
            <div>
              <p className="w-full" style={{ padding: "5px", height: "100px" }}>
                News Projets:
                <br />
                L'équipe de Lyon développe une app pour faciliter la
                communication interne. N'hésitez pas à vous rapprocher d'eux si
                vous avez des resources ou des talents à proposer.
              </p>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <div>
              <p
                className="w-full mb-10"
                style={{ padding: "5px", height: "100px" }}
              >
                Daily News:
                <br />
                Aujourd'hui c'est vendredi. On devrait pas avoir à vous le
                rappeler, mais on le fait quand même: <br />
                pas de mise en prod le vendredi!
              </p>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <div>
              <p
                className="w-full mb-10"
                style={{ padding: "5px", height: "100px" }}
              >
                Quote of the day:
                <br />
                Tester, c'est douter <br />
                John
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default DailyNews;
