import React, { useMemo, useState } from "react";
import logo from "./images/logo.png";
import fire from "./images/fire.jpg";
import mantle from "./images/mantle.jpg";
import glory from "./images/glory.jpg";
import esther from "./images/esther.jpg";

import leotard1 from "./images/leotard1.jpg";
import leotard2 from "./images/leotard2.jpg";
import leotard3 from "./images/leotard3.jpg";

import shoes1 from "./images/shoes1.jpg";
import shoes2 from "./images/shoes2.jpg";
import shoes3 from "./images/shoes3.jpg";

import duffle1 from "./images/duffle1.jpg";
import duffle2 from "./images/duffle2.jpg";
import duffle3 from "./images/duffle3.jpg";

const products = [
  {
    id: 1,
    name: "A Fire Goes Before Thee",
    price: 120,
    image: fire,
    description: "A bold prophetic garment symbolizing divine movement and spiritual authority.",
    category: "Featured Garments",
  },
  {
    id: 2,
    name: "The Commander's Mantle",
    price: 135,
    image: mantle,
    description: "A powerful garment representing leadership, elegance, and spiritual command.",
    category: "Featured Garments",
  },
  {
    id: 3,
    name: "His Glory Hovers",
    price: 125,
    image: glory,
    description: "A flowing design reflecting the presence and glory of God in worship.",
    category: "Featured Garments",
  },
  {
    id: 4,
    name: "The Favor of Esther",
    price: 140,
    image: esther,
    description: "A royal garment inspired by grace, beauty, and divine favor.",
    category: "Featured Garments",
  },

  {
    id: 5,
    name: "Grace Leotard",
    price: 65,
    image: leotard1,
    description: "Elegant stretch leotard designed for graceful dance ministry and movement.",
    category: "Leotards",
  },
  {
    id: 6,
    name: "Classic Performance Leotard",
    price: 70,
    image: leotard2,
    description: "Smooth fitted leotard for comfort, flexibility, and polished performance.",
    category: "Leotards",
  },
  {
    id: 7,
    name: "Royal Gold Leotard",
    price: 75,
    image: leotard3,
    description: "Luxury gold leotard for powerful stage presence and premium shine.",
    category: "Leotards",
  },

  {
    id: 8,
    name: "Classic Ballet Shoes",
    price: 55,
    image: shoes1,
    description: "Soft ballet shoes designed for comfort, beauty, and fluid movement.",
    category: "Ballet Shoes",
  },
  {
    id: 9,
    name: "Silver Ballet Shoes",
    price: 60,
    image: shoes2,
    description: "Elegant silver ballet shoes perfect for standout performances.",
    category: "Ballet Shoes",
  },
  {
    id: 10,
    name: "Black Performance Shoes",
    price: 58,
    image: shoes3,
    description: "Stylish black performance shoes ideal for stage and rehearsal.",
    category: "Ballet Shoes",
  },

  {
    id: 11,
    name: "Kairos Signature Duffle",
    price: 80,
    image: duffle1,
    description: "A stylish premium duffle bag for carrying dance essentials with elegance.",
    category: "Duffle Bags",
  },
  {
    id: 12,
    name: "Royal Carry Duffle",
    price: 85,
    image: duffle2,
    description: "A spacious dance duffle bag with a polished look and luxury feel.",
    category: "Duffle Bags",
  },
  {
    id: 13,
    name: "Worship Journey Duffle",
    price: 82,
    image: duffle3,
    description: "A refined duffle bag designed for dancers who want beauty and function.",
    category: "Duffle Bags",
  },
];

const categoryOrder = [
  "Featured Garments",
  "Leotards",
  "Ballet Shoes",
  "Duffle Bags",
];

function Navbar({ cartCount }) {
  return (
    <header style={styles.header}>
      <div style={styles.logoWrap}>
        <div style={styles.logoShell}>
          <img src={logo} alt="Kairos logo" style={styles.logo} />
        </div>
        <div>
          <h1 style={styles.brand}>Kairos Dance Store</h1>
          <p style={styles.brandSub}>Luxury worship wear with meaning and movement</p>
        </div>
      </div>

      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#shop" style={styles.link}>Shop</a>
        <a href="#cart" style={styles.link}>Cart ({cartCount})</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroOverlay} />
      <div style={styles.heroContent}>
        <p style={styles.heroMini}>PREMIUM COLLECTION</p>
        <h2 style={styles.heroTitle}>Kairos Dance Store</h2>
        <p style={styles.heroText}>
          Luxurious dance and worship garments crafted to reflect grace, beauty,
          power, and divine expression.
        </p>
        <a href="#shop" style={styles.heroBtn}>Explore Collection</a>
      </div>
    </section>
  );
}

function ProductCard({ product, addToCart, openPreview }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrap}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
          onClick={() => openPreview(product.image)}
        />
        <div style={styles.imageHint}>Click to enlarge</div>
      </div>
      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.desc}>{product.description}</p>
      <p style={styles.price}>${product.price}</p>
      <button style={styles.btn} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

function Cart({ cart, onOpenCheckout }) {
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <section id="cart" style={styles.section}>
      <h2 style={styles.sectionTitle}>Your Cart</h2>
      <div style={styles.cartBox}>
        {cart.length === 0 ? (
          <p style={styles.emptyText}>No items yet. Add products from the collection above.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div>
                  <div style={styles.cartName}>{item.name}</div>
                  <div style={styles.cartQty}>Quantity: {item.quantity}</div>
                </div>
                <div style={styles.cartPrice}>${item.price * item.quantity}</div>
              </div>
            ))}
            <h3 style={styles.total}>Total: ${total}</h3>
            <button style={styles.checkoutBtn} onClick={onOpenCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </section>
  );
}

function CheckoutModal({ open, onClose, cart }) {
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={styles.modalBackdrop} onClick={onClose}>
      <div style={styles.checkoutCard} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>×</button>
        <h2 style={styles.checkoutTitle}>Secure Checkout</h2>
        <p style={styles.checkoutText}>
          Complete your order by adding your customer and payment information below.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.checkoutForm}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" required style={styles.input} placeholder="Enter full name" />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" required style={styles.input} placeholder="Enter email address" />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number</label>
              <input type="tel" required style={styles.input} placeholder="Enter phone number" />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Address</label>
              <input type="text" required style={styles.input} placeholder="Street, town, country" />
            </div>

            <div style={styles.fullRow}>
              <h3 style={styles.paymentHeading}>Payment Information</h3>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Cardholder Name</label>
              <input type="text" required style={styles.input} placeholder="Name on card" />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Card Number</label>
              <input type="text" required style={styles.input} placeholder="1234 5678 9012 3456" />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Expiry Date</label>
              <input type="text" required style={styles.input} placeholder="MM/YY" />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>CVV</label>
              <input type="text" required style={styles.input} placeholder="123" />
            </div>

            <div style={styles.fullRow}>
              <div style={styles.orderSummary}>Order Total: ${total}</div>
            </div>

            <div style={styles.fullRow}>
              <button type="submit" style={styles.placeOrderBtn}>
                Submit Payment & Place Order
              </button>
            </div>
          </form>
        ) : (
          <div style={styles.successBox}>
            Your order has been submitted successfully. This checkout is for
            prototype and demonstration purposes.
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" style={styles.footer}>
      <h3 style={styles.footerTitle}>Kairos Dance Store</h3>
      <p style={styles.footerText}>Phone: 767-265-3477</p>
      <p style={styles.footerText}>Email: kairosdesignz@gmail.com</p>
      <p style={styles.footerText}>Location: Dominica</p>
    </footer>
  );
}

function PreviewModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div style={styles.modalBackdrop} onClick={onClose}>
      <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>×</button>
        <img src={image} alt="Preview" style={styles.modalImage} />
      </div>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const productsByCategory = categoryOrder.map((category) => ({
    category,
    items: products.filter((product) => product.category === category),
  }));

  return (
    <div style={styles.page}>
      <Navbar cartCount={cartCount} />
      <Hero />

      <section id="shop" style={styles.section}>
        <h2 style={styles.sectionTitle}>Store Collection</h2>
        <p style={styles.sectionText}>
          Explore our premium garment and accessories collections, including
          worship garments, leotards, ballet shoes, and duffle bags.
        </p>

        {productsByCategory.map(({ category, items }) => (
          <div key={category} style={styles.categorySection}>
            <h3 style={styles.categoryTitle}>{category}</h3>
            <div style={styles.grid}>
              {items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  openPreview={setPreviewImage}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <Cart cart={cart} onOpenCheckout={() => setCheckoutOpen(true)} />
      <Footer />
      <PreviewModal image={previewImage} onClose={() => setPreviewImage(null)} />
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
      />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "white",
    background:
      "radial-gradient(circle at top, rgba(212,175,55,0.18), transparent 18%), radial-gradient(circle at right, rgba(255,215,0,0.12), transparent 20%), linear-gradient(180deg, #020202 0%, #090909 35%, #120d05 70%, #000000 100%)",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "18px 28px",
    background: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,215,0,0.28)",
    flexWrap: "wrap",
    boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  logoShell: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(145deg, rgba(255,215,0,0.16), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,215,0,0.35)",
    boxShadow: "0 0 24px rgba(255,215,0,0.25)",
  },
  logo: {
    height: "86px",
    width: "86px",
    objectFit: "contain",
    borderRadius: "50%",
  },
  brand: {
    color: "#f4d06f",
    margin: 0,
    fontSize: "1.8rem",
    letterSpacing: "0.5px",
    textShadow: "0 0 10px rgba(255,215,0,0.25)",
  },
  brandSub: {
    margin: "4px 0 0",
    color: "#d8d0be",
    fontStyle: "italic",
    fontSize: "0.95rem",
  },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    alignItems: "center",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "999px",
    fontWeight: "bold",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,215,0,0.1)",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    padding: "120px 20px 90px",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(255,215,0,0.12), transparent 25%), radial-gradient(circle at bottom, rgba(212,175,55,0.14), transparent 30%)",
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative",
    maxWidth: "850px",
    margin: "0 auto",
    padding: "40px 24px",
    borderRadius: "28px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
    border: "1px solid rgba(255,215,0,0.18)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  },
  heroMini: {
    color: "#f4d06f",
    letterSpacing: "4px",
    fontSize: "0.8rem",
    marginBottom: "14px",
  },
  heroTitle: {
    color: "#f4d06f",
    fontSize: "3.4rem",
    marginBottom: "14px",
    textShadow: "0 0 22px rgba(255,215,0,0.28)",
  },
  heroText: {
    color: "#f1ede2",
    fontSize: "1.08rem",
    lineHeight: 1.7,
    maxWidth: "720px",
    margin: "0 auto 28px",
  },
  heroBtn: {
    display: "inline-block",
    textDecoration: "none",
    color: "#000",
    background: "linear-gradient(135deg, #f7d774, #d4af37)",
    padding: "14px 26px",
    borderRadius: "999px",
    fontWeight: "bold",
    boxShadow: "0 10px 24px rgba(212,175,55,0.28)",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "1250px",
    margin: "0 auto",
  },
  sectionTitle: {
    color: "#f4d06f",
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "14px",
    textShadow: "0 0 12px rgba(255,215,0,0.18)",
  },
  sectionText: {
    textAlign: "center",
    color: "#ddd5c3",
    maxWidth: "760px",
    margin: "0 auto 34px",
    lineHeight: 1.7,
  },
  categorySection: {
    marginTop: "38px",
  },
  categoryTitle: {
    color: "#f4d06f",
    margin: "0 0 18px",
    fontSize: "1.5rem",
    borderLeft: "4px solid rgba(255,215,0,0.5)",
    paddingLeft: "12px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "26px",
  },
  card: {
    background: "linear-gradient(180deg, rgba(21,21,21,0.95), rgba(8,8,8,0.98))",
    border: "1px solid rgba(255,215,0,0.25)",
    padding: "16px",
    borderRadius: "22px",
    boxShadow: "0 18px 34px rgba(0,0,0,0.38), 0 0 18px rgba(255,215,0,0.12)",
  },
  imageWrap: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    marginBottom: "16px",
  },
  image: {
    width: "100%",
    height: "340px",
    objectFit: "cover",
    display: "block",
    borderRadius: "16px",
    cursor: "pointer",
  },
  imageHint: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    background: "rgba(0,0,0,0.68)",
    color: "#f4d06f",
    fontSize: "0.75rem",
    padding: "6px 10px",
    borderRadius: "999px",
    border: "1px solid rgba(255,215,0,0.2)",
  },
  title: {
    color: "#f4d06f",
    marginBottom: "10px",
    fontSize: "1.2rem",
  },
  desc: {
    color: "#ddd5c3",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    minHeight: "74px",
  },
  price: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.08rem",
    margin: "14px 0",
  },
  btn: {
    width: "100%",
    background: "linear-gradient(135deg, #f7d774, #d4af37)",
    color: "#000",
    border: "none",
    padding: "12px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 10px 20px rgba(212,175,55,0.2)",
  },
  cartBox: {
    maxWidth: "850px",
    margin: "0 auto",
    background: "linear-gradient(180deg, rgba(18,18,18,0.96), rgba(8,8,8,0.98))",
    border: "1px solid rgba(255,215,0,0.22)",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },
  emptyText: {
    textAlign: "center",
    color: "#ddd5c3",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    padding: "14px 0",
  },
  cartName: {
    color: "#f4d06f",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  cartQty: {
    color: "#cfc6b4",
    fontSize: "0.92rem",
  },
  cartPrice: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  total: {
    textAlign: "center",
    color: "#f4d06f",
    marginTop: "22px",
    fontSize: "1.5rem",
  },
  checkoutBtn: {
    display: "block",
    margin: "22px auto 0",
    background: "linear-gradient(135deg, #f7d774, #d4af37)",
    color: "#000",
    border: "none",
    padding: "14px 24px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 10px 22px rgba(212,175,55,0.22)",
  },
  checkoutCard: {
    position: "relative",
    maxWidth: "900px",
    width: "100%",
    background: "linear-gradient(180deg, #0b0b0b, #141006)",
    borderRadius: "24px",
    border: "1px solid rgba(255,215,0,0.24)",
    padding: "26px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
  },
  checkoutTitle: {
    color: "#f4d06f",
    marginBottom: "10px",
    fontSize: "2rem",
  },
  checkoutText: {
    color: "#ddd5c3",
    marginBottom: "22px",
    lineHeight: 1.6,
  },
  checkoutForm: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    color: "#f4d06f",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  input: {
    padding: "13px 14px",
    borderRadius: "14px",
    border: "1px solid rgba(255,215,0,0.18)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    outline: "none",
  },
  fullRow: {
    gridColumn: "1 / -1",
  },
  paymentHeading: {
    color: "#f4d06f",
    margin: "8px 0 0",
    fontSize: "1.2rem",
    borderTop: "1px solid rgba(255,215,0,0.14)",
    paddingTop: "16px",
  },
  orderSummary: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1rem",
    textAlign: "center",
    marginTop: "8px",
  },
  placeOrderBtn: {
    width: "100%",
    background: "linear-gradient(135deg, #f7d774, #d4af37)",
    color: "#000",
    border: "none",
    padding: "15px 24px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 10px 22px rgba(212,175,55,0.22)",
  },
  successBox: {
    color: "#f5f0e2",
    background: "rgba(255,215,0,0.08)",
    border: "1px solid rgba(255,215,0,0.18)",
    padding: "20px",
    borderRadius: "18px",
    lineHeight: 1.6,
  },
  footer: {
    textAlign: "center",
    padding: "36px 20px",
    borderTop: "1px solid rgba(255,215,0,0.22)",
    marginTop: "28px",
    background: "rgba(0,0,0,0.85)",
  },
  footerTitle: {
    color: "#f4d06f",
    marginBottom: "12px",
    fontSize: "1.5rem",
  },
  footerText: {
    color: "#ddd5c3",
    margin: "6px 0",
  },
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.82)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 3000,
  },
  modalCard: {
    position: "relative",
    maxWidth: "820px",
    width: "100%",
    background: "#080808",
    borderRadius: "24px",
    border: "1px solid rgba(255,215,0,0.22)",
    padding: "18px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
  },
  modalImage: {
    width: "100%",
    maxHeight: "80vh",
    objectFit: "contain",
    borderRadius: "18px",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "12px",
    height: "38px",
    width: "38px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(0,0,0,0.75)",
    color: "#f4d06f",
    fontSize: "1.6rem",
    cursor: "pointer",
  },
};