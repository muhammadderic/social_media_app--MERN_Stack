export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="user profile" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}