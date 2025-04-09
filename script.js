// Card Data Configuration
const cardData = {
  debit: [
    { name: "ICICI Debit", balance: "₹7,520", blocked: false },
    { name: "Axis Bank", balance: "₹12,300", blocked: false },
    { name: "Kotak Debit", balance: "₹9,800", blocked: false }
  ],
  credit: [
    { name: "Amex Gold", balance: "₹1.5L Limit", blocked: false },
    { name: "HDFC Credit", balance: "₹45,000 Used", blocked: false },
    { name: "SBI Elite", balance: "₹2L Limit", blocked: false }
  ],
  other: [
    { name: "Delhi Metro", balance: "₹100 Balance", blocked: false },
    { name: "Arcade Rush", balance: "15 Tokens", blocked: false },
    { name: "Bus Pass", balance: "₹340 Balance", blocked: false }
  ]
};

let selectedType = null;
let currentIndex = 0;

// Unlock the card interface
function unlockCard() {
  document.getElementById("card-name").innerText = "🔓 Unlocked";
  document.getElementById("card-balance").innerText = "Select a category";
  document.getElementById("card-options").style.display = "flex";
}

// User selects a category (Debit/Credit/Other)
function selectType(type) {
  selectedType = type;
  currentIndex = 0;
  document.getElementById("card-options").style.display = "none";
  document.getElementById("switchBtn").style.display = "inline-block";
  switchCard();
}

// Cycle through cards within the selected category
function switchCard() {
  if (!selectedType || !cardData[selectedType].length) return;
  const card = cardData[selectedType][currentIndex];
  document.getElementById("card-name").innerText = card.name;
  document.getElementById("card-balance").innerText = card.blocked ? "❌ BLOCKED" : card.balance;
  currentIndex = (currentIndex + 1) % cardData[selectedType].length;
}
