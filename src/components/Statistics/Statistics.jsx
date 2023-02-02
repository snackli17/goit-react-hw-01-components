// import PropTypes from 'prop-types';
import data from '../Statistics/data.json';


export const Statistics = ({title, stats  }) => {
  return (
   <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul>
    {stats.map(stat => (
      <li key={stat.id}>
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>

      </li>
    ))}
  </ul>
</section>
  );
}; 