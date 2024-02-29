const checkWord1 = 'spam';
const checkWord2 = 'sale';

function checkForSpam(message) {
  const normalizedString = message.toLowerCase();
  const hasSpamWord1 = normalizedString.includes(checkWord1);
  const hasSpamWord2 = normalizedString.includes(checkWord2);
  if (hasSpamWord1 || hasSpamWord2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
