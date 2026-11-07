const sampleUsers = [
  { name: "Alex Johnson", username: "alex_j", phone: "555-234-5678", promoCode: "SUMMER" },
  { name: "B", username: "cool_user_123", phone: "555.345.6789", promoCode: "summer" },
  { name: "Charlie Brown", username: "charlie!brown", phone: "5554567890", promoCode: "SUMMER2026" },
  { name: "Dana Scully", username: "da", phone: "555-567-8901", promoCode: "SuMmEr" },
  { name: "Edward Nygma", username: "the_riddler_super_fan", phone: "555-678-901", promoCode: null },
  { name: "Fiona Gallagher", username: "fiona_g", phone: "555-789-0123", promoCode: "" }
];

function validateName(name) {
  return /^[a-zA-Z ]{2,}$/.test(name);
}

function validateUsername(username) {
  return /^\w{3,12}$/.test(username);
}

console.log(validateName("Alex Johnson"));
console.log(validateName("B"));
console.log(validateUsername("alex_j"));
console.log(validateUsername("charlie!brown"));
console.log(validateUsername("da"));
console.log(validateUsername("the_riddler_super_fan"));
