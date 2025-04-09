
const cardNames = ['HDFC Platinum', 'ICICI Coral', 'Axis Rewards', 'Metro SmartCard'];
const balances = ['₹7,200.00', '₹2,480.00', '₹12,999.00', '₹620.00'];
let currentCard = 0;

function scrollToModel() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

function switchCard() {
  currentCard = (currentCard + 1) % cardNames.length;
  document.getElementById('card-name').textContent = cardNames[currentCard];
  document.getElementById('card-balance').textContent = balances[currentCard];
}
