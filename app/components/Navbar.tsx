// The numbers showing the steps of the input process

"use client";

import { useEffect, useState } from "react";
import NumberTag from "./NumberTag";

interface NavbarProps {
  selectedPage: number;
}

const Navbar: React.FC<NavbarProps> = ({ selectedPage }) => {
  const [selectedTag, setSelectedTag] = useState(1);
  const numberTagArray = [1, 2, 3, 4];
  const titles = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  useEffect(() => {
    setSelectedTag(selectedPage);
  }, [selectedPage]);

  return (
    <nav className="flex justify-center desktop:justify-start bg-mobile desktop:bg-desktop bg-no-repeat h-[170px] w-[375px] desktop:h-full">
      <div className="flex desktop:flex-col desktop:ml-8 gap-3 desktop:gap-8 mt-8">
        {numberTagArray.map((number) => {
          return (
            <NumberTag
              key={number}
              numberTag={number}
              isSelected={selectedTag === number ? true : false}
              name={titles[number - 1]}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
