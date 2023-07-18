// Form header

"use client";

interface HeaderProps {
  title: string;
  subtitle: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="text-marineBlue font-bold text-2xl">{title}</h1>
      <h4 className="mt-2 text-coolGray">{subtitle}</h4>
    </div>
  );
};

export default Header;
