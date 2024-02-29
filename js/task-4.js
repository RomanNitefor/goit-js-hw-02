function getShippingCost(country) {
  let message;

  switch (country) {
    case 'China':
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    case 'Chile':
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case 'Australia':
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case 'Jamaica':
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = `Sorry, there is no delivery to your country`;
      break;
  }

  return message;
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
