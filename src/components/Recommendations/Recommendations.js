import Recommendation from '../Recommendation/Recommendation';

const Recommendations = ({ recommendations, isFetching }) => {
  return (
    <div className="Recommendations">
      <h2 className="p-h2">We got your recommendation</h2>
      <p className="p-p">
        Based on your answers, this is what makes sense for you and what you
        should pay.{' '}
      </p>

      {isFetching ? (
        <div className="d-flex Recommendations-spinner mt32">
          <div className="ds-spinner ds-spinner__m" />
        </div>
      ) : (
        <ul className="mt16">
          {recommendations.map((recommendation) => (
            <Recommendation
              key={recommendation.type}
              recommendation={recommendation}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
