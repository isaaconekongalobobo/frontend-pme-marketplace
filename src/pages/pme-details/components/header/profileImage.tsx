const ProfileImage = ({src}:{src: string | undefined}) => {
    return (
        <img src={src} alt="Photo de profile" />
    );
}

export default ProfileImage;
