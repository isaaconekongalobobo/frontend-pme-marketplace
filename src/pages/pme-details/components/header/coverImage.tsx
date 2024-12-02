const CoverImage = ({src}:{src: string | undefined}) => {
    return (
        <img src={src} alt="Photo de couverture" />
    );
}

export default CoverImage;
