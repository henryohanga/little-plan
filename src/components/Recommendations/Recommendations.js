import { useEffect, useState } from 'react';

import Recommendation from '../Recommendation/Recommendation';

const Recommendations = ({ recommendations, isFetching }) => {
  const [hasNoRecommendations, setHasNoRecommendations] = useState(false);

  useEffect(() => {
    setHasNoRecommendations(() => !recommendations.length && !isFetching);
  }, [recommendations, isFetching]);

  return (
    <div className="Recommendations">
      {hasNoRecommendations ? (
        <div>
          <h2 className="p-h2 tc-red-700">It must be terrible!</h2>
          <p className="p-p">
            Unfortunately, there was an issue getting a recommendation. Please
            try again
          </p>
        </div>
      ) : (
        <div>
          <h2 className="p-h2 tc-green-700">We got your recommendation</h2>
          <p className="p-p">
            Based on your answers, this is what makes sense for you and what you
            should pay.{' '}
          </p>
        </div>
      )}

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
