import PropTypes from 'prop-types';
import {Section,Title, StatList, Item,Label, Percentage  } from './Statistics.styled';


let color = '#' + Math.floor(Math.random() * (0xffffff + 1))
    .toString(16)
    .padStart(6, '0')

export const Statistics = ({ title, stats  }) => {
  return (
    <Section>
      {/* {<Title >{title}</Title>} */}
       {Title && <Title>{title}</Title>}
      <StatList>
    {stats.map(stat => (
      <Item key={stat.id}
        style={{ background: color }}
      >
      <Label>{stat.label}</Label>
      <Percentage>{stat.percentage}%</Percentage>
      </Item>
    ))}
  </StatList>
</Section>
  );
}; 

Statistics.propTypes = {
  title:PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,
    }),
  ),
};
