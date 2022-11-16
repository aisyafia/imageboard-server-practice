import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer class="footer-container">
        <div className="our-shop">FianaShop</div>
        <div className="about-container">
          <h5>About FianaShop</h5>
          <p>About us</p>
          <p>Contact us</p>
          <p>Career</p>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
        <div className="services-container">
          <h5>Services</h5>
          <p>Help</p>
          <p>Order return</p>
          <p>Oder refund</p>
          <p>Newsletter</p>
        </div>
        <div>
          <h5>Our Socials</h5>
          <div className="socials-container">
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
