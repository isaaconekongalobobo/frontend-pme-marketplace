interface userAvatarType {
    userAvatar: string | undefined, 
    userName: string | undefined
}
const UserAvatar = ({userAvatar, userName} : userAvatarType ) => {
    return (
        <img src={userAvatar} alt={`${userName} profil`} className="w-8 h-8 rounded-full mr-2"/>
    );
}

export default UserAvatar;
