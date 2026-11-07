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

function validatePhone(phone) {
  return /^\d{3}[-.]?\d{3}[-.]?\d{4}$/.test(phone);
}

function validatePromoCode(promo) {
  if (!promo) return false;
  return /^summer$/i.test(promo);
}

console.log(validatePhone("555-234-5678"));
console.log(validatePhone("555.345.6789"));
console.log(validatePhone("5554567890"));
console.log(validatePhone("555-678-901"));
console.log(validatePromoCode("SUMMER"));
console.log(validatePromoCode("SuMmEr"));
console.log(validatePromoCode("SUMMER2026"));
console.log(validatePromoCode(null));
console.log(validatePromoCode(""));

function formatPhoneNumber(phone) {
  if (!validatePhone(phone)) return null;
  return phone.replace(/^(\d{3})[-.]?(\d{3})[-.]?(\d{4})$/, "($1) $2-$3");
}

for (const user of sampleUsers) {
  console.log(user.phone, "->", formatPhoneNumber(user.phone));
}

function processRegistration(user) {
  const errors = [];
  const phone = formatPhoneNumber(user.phone);

  if (!validateName(user.name)) errors.push("Invalid name");
  if (!validateUsername(user.username)) errors.push("Invalid username");
  if (phone === null) errors.push("Invalid phone");

  if (errors.length > 0) {
    return { success: false, errors: errors };
  }

  return {
    success: true,
    data: {
      name: user.name,
      username: user.username,
      phone: phone,
      discountApplied: validatePromoCode(user.promoCode)
    }
  };
}

for (const user of sampleUsers) {
  console.log(user.name, processRegistration(user));
}

console.log(validateUsername("abc"));
console.log(validateUsername("abcdefghijkl"));
console.log(validateUsername("abcdefghijklm"));

const edgeCases = [
  { name: "Gina Linetti", username: "gina@99", phone: "555-890-1234", promoCode: "Summer" },
  { name: "Hank Hill", username: "hank_hill", phone: "555 PRO PANE", promoCode: "" }
];

for (const user of edgeCases) {
  console.log(user.name, processRegistration(user));
}