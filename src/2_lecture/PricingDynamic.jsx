import { FaShoppingCart } from "react-icons/fa";
import React from "react";

import Card from "./Card";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Basic Plan",
      description: [
        "Perfect for individuals starting out",
        "Includes essential features",
        "24/7 Email support",
        "Up to 2 team members",
      ],
      price: "19.99/month",
      image: "https://placehold.co/150",
      buttonText: "Choose Basic",
      cardStyle: "border-secondary",
    },
    {
      id: 2,
      title: "Pro Plan",
      description: [
        "Ideal for small teams or startups",
        "Access to advanced tools",
        "Priority phone support",
        "Up to 10 team members",
      ],
      price: "49.99/month",
      image: "https://placehold.co/150",
      buttonText: "Choose Pro",
      cardStyle: "border-success",
    },
    {
      id: 3,
      title: "Enterprise Plan",
      description: [
        "Designed for large organizations",
        "Custom feature development",
        "Dedicated support team",
        "Unlimited team members",
      ],
      price: "99.99/month",
      image: "https://placehold.co/150",

      cardStyle: "border-warning",
    },
  ];

  const handlePurchase = (plan) => {
    alert(`You selected ${plan} Plan!`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Pricing Plans</h1>

      <div className="row">
        {pricingPlans.map((plan) => (
          <div className="col-md-4">
            <Card
              title={`${plan.title} - ${plan.price}`}
              description={plan.description}
              image={plan.image}
              buttonText={plan.buttonText}
              buttonAction={() => handlePurchase(plan.title)}
              cardStyle={plan.cardStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
