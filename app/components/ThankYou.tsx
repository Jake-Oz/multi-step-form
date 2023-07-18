import Image from "next/image";
import thankYouIcon from "@/public/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="my-12 flex flex-col justify-center items-center">
      <Image
        className="h-14 w-auto"
        src={thankYouIcon}
        alt="Thank you Check Mark"
      />
      <h1 className="mt-4 text-center text-marineBlue font-bold text-2xl">
        Thank you!
      </h1>
      <p className="mt-2 text-coolGray text-center">
        Thanks for confirming your subscription!
      </p>
      <p className="text-coolGray text-center">
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
