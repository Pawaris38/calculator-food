const calculateTotalPrice = (allItems, isMember) => {
    let originalPrice = 0;
    allItems.forEach((item) => {
      originalPrice += item.value * item.amount;
    });
  
    const isDiscount = allItems.some(
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

module.exports = { calculateTotalPrice };