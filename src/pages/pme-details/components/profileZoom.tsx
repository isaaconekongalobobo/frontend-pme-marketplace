const ProfileZoom = ({src, showOrHiddeProfile}:{src:string | undefined, showOrHiddeProfile: () => void}) => {
    return (
        <div className="absolute flex justify-center w-full  p-10 z-10" onClick={showOrHiddeProfile}>
            <div className="bg-black-marroon bg-opacity-75 pt-10">
              <img src={src} alt="Photo de profil" className="w-96"  />  
            </div>
        </div>
    );
}

export default ProfileZoom;
