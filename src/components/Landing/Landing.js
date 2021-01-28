import './Landing.scss';

const Landing = ({ onGetStarted }) => {
  return (
    <div className="w60">
      <h2 className="p-h2  mb16">
        Looking for a recommendation for your next insurance plan?
      </h2>
      <p className="p-p">
        Look no more, because we have some already. Just provide us with a few
        details
      </p>

      <button className="p-btn--primary mt32" onClick={onGetStarted}>
        Get started
      </button>
    </div>
  );
};

export default Landing;
