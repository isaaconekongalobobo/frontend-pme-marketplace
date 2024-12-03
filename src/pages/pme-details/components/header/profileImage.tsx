const ProfileImage = ({src}:{src: string | undefined}) => {
    return (
        <img src={src} alt="Photo de profile" 
        className=" size-24 sm:size-48 rounded-full shadow-lg border-8 border-baige " />
    );
}

export default ProfileImage;
