import Hero from './Hero';
import LeftSection from './LeftSection';
import RigthSection from './RightSection';
import Universe from './Universe';
import './product.css';

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/orbit.png"
        productName=" Orbit"
        productDescription="Orbit is NovaTrade's flagship trading platform, offering a fast, intuitive experience with real-time market insights, advanced charts, and seamless order execution across devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RigthSection
        imageUrl="media/images/pulse.png"
        productName="Pulse"
        productDescription="Pulse helps you monitor your portfolio, analyze investments, review performance, and gain valuable insights through a clean and easy-to-use dashboard."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/lime.png"
        productName="Lime"
        productDescription="Lime makes long-term investing simple by providing an easy way to explore and manage mutual funds and diversified investment opportunities."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RigthSection
        imageUrl="media/images/bridgeApi.png"
        productName="Bridge API"
        productDescription="Bridge API enables developers to build custom trading applications, automate workflows, and integrate financial data using secure and flexible APIs."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/forge.png"
        productName="Forge"
        productDescription="Forge is NovaTrade's learning platform, offering structured lessons and practical resources to help beginners and experienced investors grow their financial knowledge."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center final-para">
        Want to learn more about our technology?
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
