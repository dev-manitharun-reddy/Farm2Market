import "../styles/Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("username")
  );

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const BuyProduct = (product) => {
    // Use confirm() instead of alert() for a yes/no confirmation
    console.log(product);
    const isConfirmed = confirm("Do you want to buy this product?");

    if (isConfirmed) {
      // Ask the quantity of the product
      const qty = prompt("Enter the quantity of the product you want to buy.");

      if (qty && !isNaN(qty) && qty > 0) {
        const transactions =
          JSON.parse(localStorage.getItem("transactions")) || [];

        // Add the transaction to local storage
        transactions.push({
          productName: product.productName,
          price: product.price,
          qty: parseInt(qty), // Ensure qty is an integer
          farmerName: product.username,
          customerName: loggedInUser, // Assuming loggedInUser is defined elsewhere
        });

        // Save updated transactions to local storage
        localStorage.setItem("transactions", JSON.stringify(transactions));

        alert("Product bought successfully!");
      } else {
        alert("Please enter a valid quantity.");
      }
    }
    // If the user clicks 'Cancel', do nothing
  };

  return (
    <>
      <section className="home" id="video">
        <video autoPlay muted loop playsInline className="background-video">
          <source
            src="https://ik.imagekit.io/manitharunreddy/INIZIO%20ENTRY%20VIDEO.mp4?updatedAt=1730648633641"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="max-width"></div>
      </section>
      {/* <div className="carousel owl-carousel">
        <div className="card">
          <div className="box">
            <img
              src="https://ik.imagekit.io/manitharunreddy/2.PNG?updatedAt=1730787182078"
              alt="img"
            />
            <div className="text">KALANDAR</div>
            <p>CHIEF EXECUTIVE OFFICER (CEO).</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src="https://picsum.photos/300" alt="img" />
            <div className="text">KALANDAR</div>
            <p>CHIEF EXECUTIVE OFFICER (CEO).</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src="https://picsum.photos/300" alt="img" />
            <div className="text">KALANDAR</div>
            <p>CHIEF EXECUTIVE OFFICER (CEO).</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src="https://picsum.photos/300" alt="img" />
            <div className="text">KALANDAR</div>
            <p>CHIEF EXECUTIVE OFFICER (CEO).</p>
          </div>
        </div>
      </div> */}
      <div className="carousel owl-carousel">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="card">
              <div className="box">
                <img src={product.imageAddress} alt={product.productName} />
                <div className="text">{product.productName}</div>
                <p>Price: ${product.price}</p>
                <p>Seller: {product.username}</p>
                {loggedInUser ? (
                  <button
                    className="buy-button"
                    onClick={() => {
                      BuyProduct(product);
                    }}
                  >
                    Buy
                  </button>
                ) : (
                  <button
                    className="buy-button"
                    onClick={() => {
                      alert("Please login to buy the product.");
                    }}
                  >
                    Buy
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products available.</p>
        )}
      </div>
    </>
  );
};

export default Home;
