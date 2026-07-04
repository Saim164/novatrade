import './common.css';
import { Link } from 'react-router-dom';

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Start Your Investing Journey</h1>
        <p className="mb-4 text-muted">
          Open your NovaTrade account today and experience a modern platform
          built for learning, investing, and growing your portfolio.{' '}
        </p>
        <Link className="text-decoration-none" to="/Signup">
          <button className="py-2  btn btn-primary fs-5 openAccountbtn mb-5">
            Create Free Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
