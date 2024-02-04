import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePayment = () => {
    if (!selectedPlan) {
      alert("Please select a subscription plan.");
      return;
    }

    // Simulate payment processing
    alert(`Payment successful for ${selectedPlan}.`);
    // You can redirect or perform other actions here
  };

  const subscriptionPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 9.99,
      description: "Access to basic features",
      events: 5,
      support: "Standard",
      analytics: false,
      branding: false,
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 19.99,
      description: "Access to standard features",
      events: 10,
      support: "Priority",
      analytics: true,
      branding: false,
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 29.99,
      description: "Access to premium features",
      events: "Unlimited",
      support: "VIP",
      analytics: true,
      branding: true,
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center font-weight-bold">Choose a Subscription Plan</h2>

      <div className="row justify-content-center">
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className="col-md-4 mb-4">
            <div className={`card ${selectedPlan === plan.id ? 'border-primary' : ''}`}>
              <div className="card-body">
                <h3 className="card-title">{plan.name}</h3>
                <p className="card-text">${plan.price} per month</p>
                <p className="card-text">{plan.description}</p>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Number of Events:
                    <span className="badge bg-primary rounded-pill">{plan.events}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Support:
                    <span className="badge bg-primary rounded-pill">{plan.support}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Analytics:
                    <span className="badge bg-primary rounded-pill">
                      {plan.analytics ? 'Included' : 'Not included'}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Custom Branding:
                    <span className="badge bg-primary rounded-pill">
                      {plan.branding ? 'Included' : 'Not included'}
                    </span>
                  </li>
                </ul>
                <br></br>
                <label>
                  <input
                    type="radio"
                    name="subscriptionPlan"
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                  />
                  Select Plan
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handlePayment}>
          Subscribe Now
        </button>
      </div>
      <br />
    </div>
  );
};

export default SubscriptionPlans;
