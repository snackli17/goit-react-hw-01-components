import css from '../Profile/Profile.css'
import user from '../Profile/user.json';


export const Profile = ({username , tag, location, avatar, stats }) => {
   return <div className="profile">
  <div className={css.description}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className="avatar"
    />
           <p className="name">{ user.username}</p>
           <p className="tag">{ user.tag}</p>
           <p className="location">{ user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
}