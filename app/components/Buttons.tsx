"use client";

interface ButtonsProps {
  primaryActionLabel: string;
  secondaryActionLabel: string;
  handleActionSubmit: () => void;
  handleSecondarySubmit: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({
  primaryActionLabel,
  secondaryActionLabel,
  handleActionSubmit,
  handleSecondarySubmit,
}) => {
  return (
    <div className="flex justify-between">
      <button
        type="submit"
        onClick={handleSecondarySubmit}
        className="block text-sm text-coolGray hover:text-marineBlue"
      >
        {secondaryActionLabel}
      </button>
      <button
        type="submit"
        onClick={handleActionSubmit}
        className={`block h-10 w-[6.5rem] px-3 py-2 rounded text-sm ${
          primaryActionLabel === "Confirm"
            ? "bg-purplishBlue hover:bg-purplishBlue/70"
            : "bg-marineBlue hover:bg-marineBlue/70"
        } text-magnolia`}
      >
        {primaryActionLabel}
      </button>
    </div>
  );
};

export default Buttons;
