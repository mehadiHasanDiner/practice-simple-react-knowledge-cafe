import profile from "../../../public/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center  my-1 border-b-2  py-3 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
