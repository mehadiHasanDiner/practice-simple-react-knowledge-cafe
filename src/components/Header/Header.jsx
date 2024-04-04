import profile from "../../../public/profile.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center mx-2 my-1">
            <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;