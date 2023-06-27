import React from "react";

import beverages from "../src/assets/Beverages.jpg";
import snack from "../src/assets/Snacks.jpg";
import affordable from "../src/assets/Affordable.jpg";
import friendly from "../src/assets/Friendly.jpg";
import tea from "../src/assets/tea.jpg";
import coffee from "../src/assets/coffee.png";

function Services() {
  return (
    <div className="container">
      <h2>Our Services:</h2>
      <div className="row">
        <Service title="Tea" imgSrc={tea}>
          {/* Content for the Tea service */}
          At Ro Cafe, we take pride in our selection of teas. We offer a wide variety of flavors and blends sourced from around the world. From soothing herbal infusions to aromatic green teas and bold black teas, there's something to satisfy every
          tea lover's palate. Our teas are carefully prepared and served to perfection, ensuring a delightful and refreshing experience with every sip.
        </Service>
        <Service title="Coffee" imgSrc={coffee}>
          {/* Content for the Coffee service */}
          Indulge in the rich and aromatic world of coffee at Ro Cafe. We source the finest beans from renowned coffee regions and expertly roast them to unlock their full flavor potential. Whether you prefer a smooth and balanced medium roast, a
          bold and robust dark roast, or a specialty espresso-based drink, our skilled baristas will craft your coffee with precision and passion. Each cup is a celebration of coffee craftsmanship, delivering a satisfying and invigorating experience.
        </Service>
        <Service title="Beverages" imgSrc={beverages}>
          Our beverage menu is designed to delight your senses and satisfy your cravings. From our carefully selected teas, including classic favorites and unique blends, to our expertly crafted coffees made from premium beans, we ensure that each
          cup is a moment of pure enjoyment. Whether you prefer a steaming hot cup of tea to start your day or a refreshing iced coffee on a sunny afternoon, our beverages are crafted with passion and attention to detail.
        </Service>
        <Service title="Snacks and Treats" imgSrc={snack}>
          Pair your favorite beverage with our delectable snacks and treats. We offer a wide variety of mouthwatering options that are perfect for any time of the day. Whether you're in the mood for savory delights like crispy samosas and flavorful
          sandwiches or you have a sweet tooth craving for our scrumptious pastries and cookies, we have a range of snacks to satisfy your cravings and keep you energized.
        </Service>
      </div>
      <div className="row">
        <Service title="Affordable Pricing" imgSrc={affordable}>
          At Ro Cafe, we believe that enjoying quality beverages and snacks should not be a luxury reserved for a few. That's why we are committed to offering our products at affordable prices, ensuring that you can treat yourself without worrying
          about your budget. We strive to strike a balance between quality and affordability, bringing you the best value for your money.
        </Service>
        <Service title="Friendly Service" imgSrc={friendly}>
          Customer satisfaction is at the heart of everything we do. Our friendly and attentive staff members are dedicated to providing you with a warm and welcoming experience. Whether you have questions about our menu, need recommendations, or
          simply want to have a pleasant conversation, our team is here to assist you and ensure that your visit to Ro Cafe is a delightful one.
        </Service>
      </div>
    </div>
  );
}

function Service({ title, imgSrc, children }) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
      <h3>{title}</h3>
      <img src={imgSrc} alt={title} className="img-fluid rounded" style={{ width: "100%", height: "350px", objectFit: "cover" }} />
      <p className="mt-3">{children}</p>
    </div>
  );
}

export default Services;
