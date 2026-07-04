import './support.css';

function CreateTicket() {
  return (
    <div className="container">
      <div className="row px-5 py-3">
        <h1 className="fs-4">
          To create a support ticket, select a relevant topic
        </h1>
      </div>
      <div className="row row2">
        <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <h4 className="fs-6 mb-4">
            <i class="fa-solid fa-circle-plus"></i> &nbsp;Account opening
          </h4>
          <ul>
            <li><a href="">Create a New Account</a></li>
            <li><a href="">Verify Your Identity</a></li>
            <li><a href="">Upload Required Documents</a></li>
            <li><a href="">Check Verification Status</a></li>
            <li><a href="">Update Registration Details</a></li>
            <li><a href="">Account Approval Timeline</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <h4 className="fs-6 mb-4">
            <i class="fa-solid fa-circle-plus"></i> &nbsp;Your NovaTrade Account
          </h4>
          <ul>
            <li><a href="">Login & Password Issues</a></li>
            <li><a href="">Change Emai</a></li>
            <li><a href="">Change Mobile Number</a></li>
            <li><a href="">Two-Factor Authentication</a></li>
            <li><a href="">Close My Account</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <h4 className="fs-6 mb-4">
            <i class="fa-solid fa-circle-plus"></i> &nbsp;Portfolio &
            Investments
          </h4>
          <ul>
            <li><a href="">View Portfolio</a></li>
            <li><a href="">Add Investments</a></li>
            <li><a href="">Manage Investments</a></li>
            <li><a href="">Portfolio Performance</a></li>
            <li><a href="">Dividend Information</a></li>
            <li><a href="">Download Statement</a></li>
          </ul>
        </div>
      </div>
      <div className="row row3">
        <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <h4 className="fs-6 mb-4">
            <i class="fa-solid fa-circle-plus"></i> &nbsp;Trading & Orders
          </h4>
          <ul>
            <li><a href="">Place an Order</a></li>
            <li><a href="">Modify an Existing Order</a></li>
            <li><a href="">Cancel an Order</a></li>
            <li><a href="">View Order History</a></li>
            <li><a href="">Order Status</a></li>
            <li><a href="">Order Rejections</a></li>
            <li><a href="">Trading Hours</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <h4 className="fs-6 mb-4">
            <i class="fa-solid fa-circle-plus"></i> &nbsp;Payments & Billing
          </h4>
          <ul>
            <li><a href="">Deposit Funds</a></li>
            <li><a href="">Withdraw Funds</a></li>
            <li><a href="">Transaction History</a></li>
            <li><a href="">Payment Issues</a></li>
            <li><a href="">Refund Requests</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
          <h4 className="fs-6 mb-4">
            <i class="fa-solid fa-circle-plus"></i> &nbsp;Technical Support
          </h4>
          <ul>
            <li><a href="">Website Not Loading</a></li>
            <li><a href="">Mobile App Issues</a></li>
            <li><a href="">Dashboard Problems</a></li>
            <li><a href="">API & Integration Support</a></li>
            <li><a href="">Contact Technical Team</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
