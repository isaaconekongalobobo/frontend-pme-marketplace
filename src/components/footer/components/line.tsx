import Socialmedias from "./socialmedias";

const Line = () => {
    return (
        <div className="flex flex-col gap-5 items-center">
            <hr className="text-white w-full " />
            <div className="flex gap-2 ">
                <p>2024 PME Marketplace | </p>
                <Socialmedias/>
            </div>
        </div>
    );
}

export default Line;
