"use client";
import { Fragment, useState, ChangeEvent } from "react";

interface Item {
  name: string;
  value: number;
  amount: number;
}
export default function Home() {
  const [allItems, setAllItems] = useState<Item[]>([
    {
      name: "RedSet",
      value: 50,
      amount: 0,
    },
    {
      name: "GreenSet",
      value: 40,
      amount: 0,
    },
    {
      name: "BlueSet",
      value: 30,
      amount: 0,
    },
    {
      name: "YellowSet",
      value: 50,
      amount: 0,
    },
    {
      name: "PinkSet",
      value: 80,
      amount: 0,
    },
    {
      name: "PurpleSet",
      value: 90,
      amount: 0,
    },
    {
      name: "OrangeSet",
      value: 120,
      amount: 0,
    },
  ]);
  const [isMember, setIsMember] = useState(false);

  const handleMembershipChange = () => {
    setIsMember((prev) => !prev);
  };

  const handleOrderChange = (itemName: string, quantity: number) => {
    setAllItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, amount: quantity } : item
      )
    );
  };
  const handleInputChange = (
    itemName: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    handleOrderChange(itemName, parseInt(e.target.value) || 0);
  };

  const calculateTotal = () => {
    let originalPrice = 0;
    allItems.forEach((item) => {
      originalPrice += item.value * item.amount;
    });

    let isDiscount = allItems.some(
      (item) =>
        item.amount >= 2 &&
        ["OrangeSet", "PinkSet", "GreenSet"].includes(item.name)
    );

    if (isDiscount) {
      originalPrice *= 0.95;
    }

    if (isMember) {
      originalPrice *= 0.9;
    }
    return originalPrice.toFixed(2);
  };

  return (
    <Fragment>
      <div className="h-screen bg-gray-100 pt-24">
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
          <h1 className="text-2xl font-bold">Calculator Food</h1>
          {allItems.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <label className="flex-grow">
                {item.name}: {item.value} THB/set
              </label>
              <input
                type="number"
                min="0"
                value={item.amount}
                onChange={(e) => handleInputChange(item.name, e)}
                className="w-16 p-1 border rounded"
              />
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isMember}
              onChange={handleMembershipChange}
              className="h-4 w-4"
              id="member"
            />
            <label htmlFor="member">Membership Card (10% discount)</label>
          </div>
          <p className="text-xl">Total Price: {calculateTotal()} THB</p>
        </div>
      </div>
    </Fragment>
  );
}
