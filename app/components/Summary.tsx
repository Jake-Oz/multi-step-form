import { useDataCollector, Plan, Addons } from "../hooks/useDataCollector";
import { plans } from "../data/plans";

interface SummaryProps {
  ChangePlan: () => void;
}

const Summary: React.FC<SummaryProps> = ({ ChangePlan }) => {
  const data = useDataCollector();
  const plan = data.plan;
  const addons = data.addons;
  const yearly = data.yearly;
  const addonTitles = {
    online: "Online service",
    storage: "Larger storage",
    profile: "Customizable profile",
  };

  const planCost: number = yearly
    ? plans[0].plan.yearly[plan]
    : plans[0].plan.monthly[plan];

  let totalCost: number = planCost;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center p-4 bg-alabaster rounded-t-lg">
        <div>
          <h1 className="text-marineBlue font-bold">{`${
            plan.charAt(0).toUpperCase() + plan.slice(1)
          } ${yearly ? "(Yearly)" : "(Monthly)"}`}</h1>
          <p
            className="text-coolGray hover:text-purplishBlue underline decoration-2 cursor-pointer"
            onClick={ChangePlan}
          >
            Change
          </p>
        </div>
        <p className="text-marineBlue font-bold">{`$${planCost}${
          yearly ? "/yr" : "/mo"
        }`}</p>
      </div>
      {addons.length > 0 && (
        <>
          <hr className="h-px mx-4 border-0 bg-lightGray" />
          {addons.map((addonItem) => (
            <div
              key={addonItem}
              className="flex justify-between items-center p-4 bg-alabaster rounded-b-lg"
            >
              <p className="text-coolGray">{addonTitles[addonItem]}</p>
              <p className="text-marineBlue">
                +$
                {yearly
                  ? (totalCost =
                      totalCost + plans[0].addOns.yearly[addonItem]) &&
                    `${plans[0].addOns.yearly[addonItem]}/yr`
                  : (totalCost =
                      totalCost + plans[0].addOns.monthly[addonItem]) &&
                    `${plans[0].addOns.monthly[addonItem]}/mo`}
              </p>
            </div>
          ))}
        </>
      )}
      <div className="flex justify-between px-4 mt-6 ">
        <h1 className="text-coolGray">
          Total (per {yearly ? "year" : "month"})
        </h1>
        <p className="font-bold text-purplishBlue">
          +${totalCost}
          {yearly ? "/yr" : "/mo"}
        </p>
      </div>
    </div>
  );
};

export default Summary;
