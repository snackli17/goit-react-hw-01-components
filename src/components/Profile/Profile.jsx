import css from "./Profile.module.css";
import user from '../Profile/user.json';


export const Profile = ({username , tag, location, avatar, stats }) => {
  return ( <div className={css.profile}>
  <div className={css.description}>
    <img
      src="http://hypeava.ru/uploads/posts/2018-05/1527186603_7.png"
      alt="User avatar"
    />
      <p className={css.name}>{ user.username}</p>
      <p className={css.tag}>{ user.tag}</p>
           <p className={css.location}>{ user.location}</p>
  </div>

     <ul className={css.stats}>
    <li  className={css.statsList}>
        <span className={css.label}>Followers</span>
      <span className={css.quantity}>{user.stats.followers}</span>
    </li>
    <li  className= {css.statsList}>
      <span className={css.label}>Views</span>
         <span className={css.quantity}>{user.stats.views}</span>
    </li>
    <li  className= {css.statsList}>
         <span className={css.label}>Likes</span>
         <span className={css.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
  </div>
  );
}