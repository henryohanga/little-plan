import './Recommendation.scss';

const Recommendation = ({ recommendation }) => {
  return (
    <li className="Recommendation mb8">
      <span className="Recommendation-type">
        {recommendation.type.toLowerCase().split('_').join(' ')}
      </span>
      <span>
        €
        {recommendation.price.amount.toLocaleString(
          navigator.language || 'de-DE'
        )}{' '}
        per {recommendation.price.periodicity.toLowerCase()}
      </span>
    </li>
  );
};

export default Recommendation;
