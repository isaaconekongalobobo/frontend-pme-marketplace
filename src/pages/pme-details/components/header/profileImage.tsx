const ProfileImage = ({src}:{src: string | undefined}) => {
    return (
        <img src={src} alt="Photo de profile" 
        className=" size-32 sm:size-56 rounded-full shadow-xl border-8 border-baige " />
    );
}

export default ProfileImage;
