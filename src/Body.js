import React from "react";
import tea from "./assets/tea.jpg";
import snack from "./assets/Snacks.jpg";

function Body() {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Welcome to Ro Cafe!</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src={tea}
            alt="Tea"
            className="img-fluid"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-md-6">
          <p>
            Welcome to Ro Cafe - your go-to destination for affordable and delicious beverages and snacks across India. At Ro Cafe, we take pride in offering a wide range of high-quality teas, coffees, and snacks at pocket-friendly prices, ensuring
            that you can enjoy your favorite treats without breaking the bank.
          </p>

          <p>
            Indulge in our extensive menu of beverages, carefully crafted to delight your taste buds and provide a refreshing experience. From our aromatic teas, including classic masala chai and soothing herbal infusions, to our rich and flavorful
            coffees, such as creamy cappuccinos and bold espressos, we have something to suit every preference. Each cup is meticulously prepared using top-notch ingredients, ensuring that every sip delivers a burst of delightful flavors.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 order-md-2">
          <img
            src={snack}
            alt="Snack"
            className="img-fluid"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <p>
            To complement our beverages, we offer an enticing selection of snacks that are perfect for satisfying your cravings. From crispy samosas to cheesy sandwiches and delectable pastries, our snack menu is designed to provide a quick and tasty
            pick-me-up. Whether you're on the go or looking for a cozy spot to unwind, Ro Cafe is here to serve you with affordable indulgences that will leave you fully satisfied.
          </p>
          <p>
            With our numerous conveniently located outlets throughout India, finding a Ro Cafe near you is easy. Join us at any of our branches and experience the perfect blend of great taste and affordability. We're dedicated to ensuring that you
            enjoy every visit to Ro Cafe, where quality, taste, and value come together to create an exceptional cafe experience for our valued customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
