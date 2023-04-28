import { ChangeProfile } from "../components/changeprofile";
import { useContext } from 'react';
import { AppContext } from '../App';
export const Profile = () => {
  const { username } = useContext(AppContext)
    return (
      <div>
        Profile page user:{username} 
        <ChangeProfile  />
      </div>
    )
};