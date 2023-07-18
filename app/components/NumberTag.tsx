"use client";

interface NumberTagProps {
  numberTag: number;
  isSelected: boolean;
  name: string;
}

const Number: React.FC<NumberTagProps> = ({ numberTag, isSelected, name }) => {
  const selectedClass = isSelected
    ? "bg-lightBlue text-marineBlue"
    : "bg-none text-white border border-white";

  return (
    <div className="desktop:flex desktop:gap-4 desktop:items-center">
      <div
        className={`flex justify-center items-center w-9 h-9  rounded-full ${selectedClass}`}
      >
        <p className="font-bold">{numberTag}</p>
      </div>
      <div className="hidden desktop:block">
        <p className="uppercase text-xs text-coolGray">Step {numberTag}</p>
        <h1 className="uppercase text-sm text-white">{name}</h1>
      </div>
    </div>
  );
};

export default Number;
