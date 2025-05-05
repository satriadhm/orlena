// File path: src/components/Home.js
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../App.css";
import foto2 from "../public/images/foto2.png";
import GridContainer from "./gridContainer";
import MenuDirect from "./menuDirect";
import logoGrab from "../public/images/grab-logo.png";
import logoGojek from "../public/images/Gofood-logo.png";
import shopeeFood from "../public/images/shopeefood.png";

function Home() {
  return (
    <div>
      <div className="landing">
        <h1>Bites of Happiness</h1>
        <h3>The Fudge Brownies in Bali</h3>
        <button>
          <Link
            smooth
            to="/aboutus#target"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Branches
          </Link>
        </button>
      </div>
      <div className="description">
        <div className="image-container">
          <img src={foto2} alt="" />
        </div>
        <div className="text-container">
          <p>
            Orlenalycious sprouted its wings in 2018. The idea of creating
            brownies stemmed from a desire to whip up captivating desserts in
            Denpasar, a city where dessert enthusiasm was still budding at the
            time. Orlenalycious products started gaining significant traction in
            2021, right in the midst of the Covid-19 pandemic. This global
            crisis presented a silver lining for our founder, propelling her to
            continually innovate and evolve Orlenalycious.
          </p>
          <p>
            Presently, Orlenalycious has empowered a team of 22 and unveiled
            three charming outlets across Denpasar. Based on customer research,
            we’ve proudly claimed the coveted title of being the foremost
            brownie brand in Denpasar, residing at the top of people’s minds. We
            ardently hope that Orlenalycious’ vision to spread joy through its
            products will continue to flourish. Our journey is a testament to
            the power of passion and perseverance.
          </p>
        </div>
      </div>
      <div className="best-selling">
        <div className="best">
          <div className="best-selling">
            <h2>Try our best selling menu here</h2>
          </div>
          <div className="best-selling">
            <a
              href="https://food.grab.com/id/en/restaurant/orlena-lycious-livingworld-delivery/6-C35ZMAA2VBU2EA?sourceID=20240709_141458_B577D46DB7704ABE8347AF64C388EC36_MEXMPS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img  src={logoGrab} alt="Grab logo" />
            </a>
          </div>
          <div className="best-selling">
            <a
              href="https://gofood.co.id/bali/restaurant/orlenalycious-padang-sambian-47568eaa-11f6-4949-9e76-99e4b2c1b490"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img  src={logoGojek} alt="Gojek logo" />
            </a>
          </div>
          <div className="best-selling">
            <a
              href="https://shopee.co.id/now-food/shop/21083757?shareChannel=copy_link&stm_medium=referral&stm_source=https%3A%2F%2Flinktr.ee%2F-rw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={shopeeFood} alt="Shopee Food logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="page-container">
        <GridContainer />
      </div>
      <MenuDirect />
    </div>
  );
}

export default Home;
