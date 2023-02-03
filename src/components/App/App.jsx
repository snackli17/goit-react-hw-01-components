import { Profile } from  'components/Profile/Profile'
import user from "../Profile/user.json";


import { Statistics } from 'components/Statistics/Statistics';
import data from "../Statistics/data.json";

import { FriendList} from 'components/Friends/FriendList';
import friends from "../Friends/friends.json";


import {TransactionsHistory} from 'components/Transaction/TransactionHistory';
import transactions from "../Transaction/transactions.json";


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//      <Profile/>
//     </div>
//   );
// };

export const App = () => {
  return (
  <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />;
      <TransactionsHistory transactions={transactions} />;
    </>
  );
  

};
