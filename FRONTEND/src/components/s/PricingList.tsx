import type { FC } from "react";
import check from "../../assets/design/check.svg";
import Button from "../design/buttons/Button.tsx";
import { pricing } from "../Links.ts";

interface PricingItem {
  id: string;
  title: string;
  description: string;
  price: string | null;
  features: string[];
}

const PricingList: FC = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map((item: PricingItem) => {
        const isPaidPlan = item.price !== null && item.price !== "0";

        return (
          <div
            key={item.id}
            className="w-76 max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-4xl lg:w-auto even:py-14 odd:py-8 odd:my-4
            [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4">{item.title}</h4>

            <p className="body-2 min-h-16 mb-3 text-n-1/50">
              {item.description}
            </p>

            <div className="flex items-center h-22 mb-6">
              {item.price !== null && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>

            <Button
              className="w-full mb-6"
              href={isPaidPlan ? "/pricing" : "mailto:contact@jsmastery.pro"}
            >
              {isPaidPlan ? "Get started" : "Contact us"}
            </Button>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PricingList;
