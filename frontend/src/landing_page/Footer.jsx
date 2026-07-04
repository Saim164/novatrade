function Footer() {
  return (
    <footer>
      <div className="container border-top">
        <div className="row p-3 mt-5">
          <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
            <img
              src="./media/images/logo.svg"
              alt="logo"
              className="footer-logo mb-3"
            />
            <p className="footer-para">
              &copy; 2026 NovaTrade. Educational Portfolio Project. All rights
              reserved
            </p>
          </div>
          <div className="col-6 col-md-3 footer-company mb-4 mb-md-0">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Product</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Nova.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Nova cares (Csr)</a>
          </div>
          <div className="col-6 col-md-3 footer-support mb-4 mb-md-0">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Nova blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Download & resources</a>
          </div>

          <div className="col-6 col-md-3 footer-account">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
          </div>
        </div>
        <div className="row mt-5 text-muted p-3">
          <p className="footer-para">
            NovaTrade is a fictional trading platform created for educational
            and portfolio purposes only. It does not provide real brokerage,
            investment, or financial services.
          </p>
          <p className="footer-para">
            Please do not enter sensitive personal, banking, or payment
            information anywhere on this website. If you choose to create an
            account, use only information you are comfortable sharing or
            fictional test data.
          </p>
          <p className="footer-para">
            NovaTrade will never contact you requesting passwords, OTPs, bank
            account details, debit/credit card information, or payments. Any
            email, phone call, message, or social media account claiming to
            represent NovaTrade for such purposes is fraudulent and should be
            ignored.
          </p>
          <p className="footer-para">
            All company names, products, images, pricing, and market information
            displayed on this website are fictional or presented solely for
            demonstration purposes. This project was developed to showcase
            full-stack web development skills and is not affiliated with any
            real financial institution or brokerage.
          </p>
          <p className="text-center final-links mb-3">
            <a href="">Terms and conditions</a>
            &nbsp; &nbsp; &nbsp;
            <a href="">Policies and procedures</a>
            &nbsp; &nbsp; &nbsp;
            <a href="">Privacy policy</a>
            &nbsp; &nbsp; &nbsp;
            <a href="">Disclosure</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
