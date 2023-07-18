// the buttons for stepping forward or backwards
"use client";

import Buttons from "./Buttons";

interface FooterProps {
  primaryActionLabel: string;
  secondaryActionLabel: string;
  handleActionSubmit: () => void;
  handleSecondarySubmit: () => void;
}

const Footer: React.FC<FooterProps> = ({
  primaryActionLabel,
  secondaryActionLabel,
  handleActionSubmit,
  handleSecondarySubmit,
}) => {
  return (
    <div className="h-full p-4">
      <Buttons
        primaryActionLabel={primaryActionLabel}
        secondaryActionLabel={secondaryActionLabel}
        handleActionSubmit={handleActionSubmit}
        handleSecondarySubmit={handleSecondarySubmit}
      />
    </div>
  );
};

export default Footer;
