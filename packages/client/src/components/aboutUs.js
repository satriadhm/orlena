import "../styles/AboutUs.css";
import logo from "../public/images/logo.png";
import fudge1 from "../public/images/fudge1.png";
import fudge2 from "../public/images/fudge2.png";
import fudge3 from "../public/images/fudge3.png";
import fudge4 from "../public/images/fudge4.png";

import pastry1 from "../public/images/pastry1.png";
import pastry2 from "../public/images/pastry2.png";
import pastry3 from "../public/images/pastry3.png";
import pastry4 from "../public/images/pastry4.png";
import pastry5 from "../public/images/pastry5.png";
import pastry6 from "../public/images/pastry6.png";
import pastry7 from "../public/images/pastry7.png";
import pastry8 from "../public/images/pastry8.png";

import branchPadangSambian from "../public/images/branchPadangSambian.png";
import branchPanjer from "../public/images/branchPanjer.png";
import branchLivingWorld from "../public/images/branchLivingWorld.png";
import branchIconMall from "../public/images/branchIconMall.png";
import branchAkasia from "../public/images/branchAkasia.png";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h1>Orlenalycious Established 2018 – from Bali</h1>
      </div>
      <div className="aboutus-content">
        <p>
          Since 2018, Orlenalycious has been dedicated to crafting the finest
          fudge baked brownies, using premium ingredients to deliver a rich and
          indulgent experience in every bite. Our secret recipe has been
          perfected over the years, ensuring that each brownie is moist,
          flavorful, and utterly irresistible.
        </p>
        <p>
          Located in Bali, Orlenalycious offers a tempting range of dessert
          pastries, with our signature fudge baked brownies taking center stage.
          Whether you're looking for a sweet treat to brighten your day or the
          perfect gift for a loved one, our brownies are sure to delight.
        </p>
        <p>
          Orlenalycious is the perfect spot for dessert lovers, offering a warm
          and inviting atmosphere where you can enjoy our delicious creations.
          We are committed to providing a delightful and satisfying experience
          for all our customers, any time of the day.
        </p>
      </div>
      <div className="aboutus-header">
        <h1>Try our goods, fudge brownies! </h1>
      </div>
      <div className="fudge-brownies">
        <img src={fudge1} alt="Fudge Brownies 1" />
        <img src={fudge2} alt="Fudge Brownies 2" />
        <img src={fudge3} alt="Fudge Brownies 3" />
        <img src={fudge4} alt="Fudge Brownies 4" />
      </div>
      <div className="aboutus-header">
        <h1>And our pastry one</h1>
      </div>
      <div className="pastry">
        <img src={pastry1} alt="Pastry 1" />
        <img src={pastry2} alt="Pastry 2" />
        <img src={pastry3} alt="Pastry 3" />
        <img src={pastry4} alt="Pastry 4" />
        <img src={pastry5} alt="Pastry 5" />
        <img src={pastry6} alt="Pastry 6" />
        <img src={pastry7} alt="Pastry 7" />
        <img src={pastry8} alt="Pastry 8" />
      </div>
      <div className="aboutus-header">
        <h1>Our Branches</h1>
      </div>
      <div className="branches-container">
        <div className="branches-content">
          <img src={branchPadangSambian} alt="Branch Padang Sambian" />
          <a
            href="https://goo.gl/maps/WGGTpBris26YrqLM8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {" "}
              ORLENALYCIOUS <br /> Padang Sambian
            </button>
          </a>
        </div>
        <div className="branches-content">
          <img src={branchPanjer} alt="Branch Panjer" />
          <a
            href="https://goo.gl/maps/hJKhWGTQ1Zit1vK3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {" "}
              ORLENALYCIOUS <br /> Panjer
            </button>
          </a>
        </div>
        <div className="branches-content">
          <img src={branchLivingWorld} alt="Branch Living World" />
          <a
            href="https://goo.gl/maps/4bEN1Ev8ELPt1Kst7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {" "}
              ORLENALYCIOUS <br /> Living World
            </button>
          </a>
        </div>
        <div className="branches-content">
          <img src={branchIconMall} alt="Branch Icon Mall" />
          <a
            href="https://goo.gl/maps/W3vwohrtYJ3uVucdA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {" "}
              ORLENALYCIOUS <br /> Icon Mall
            </button>
          </a>
        </div>
        <div id="target" className="branches-content">
          <img  src={branchAkasia} alt="Branch Akasia" />
          <a
            href="https://goo.gl/maps/7AdeP7waHXRpczCp6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {" "}
              ORLENALYCIOUS <br /> Akasia
            </button>
          </a>
        </div>
      </div>
      <div className="menu-direct">
        <img  src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
}
