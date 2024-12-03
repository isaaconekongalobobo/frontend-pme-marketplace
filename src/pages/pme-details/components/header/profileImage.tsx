const ProfileImage = ({src}:{src: string | undefined}) => {
    return (
        <img src={src} alt="Photo de profile" 
        className=" size-32 sm:size-48 rounded-full shadow-xl border-8 border-baige relative 
        top-16 sm:top-32 left-4 " />
    );
}

export default ProfileImage;
