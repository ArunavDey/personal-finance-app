function parse_currency(currency: TCurrency, amount: number): string {
  let parsed: string = "0";
  if (amount < 1000) {
    return amount.toString();
  } else if (amount >= 1_000 && amount < 1_000_000) {
    parsed = (amount / 1_000).toString().slice(0, 5) + "K";
  } else if (amount >= 1_000_000 && amount < 1_000_000_000) {
    parsed = (amount / 1_000_000).toString().slice(0, 5) + "M";
  } else if (amount >= 1_000_000_000 && amount < 1_000_000_000_000) {
    parsed = (amount / 1_000_000_000).toString().slice(0, 5) + "B";
  }
  return currency_map[currency] + " " + parsed;
}

type TCurrency = "USD" | "INR" | "GBP" | "EUR";

const currency_map: Record<TCurrency, string> = {
  INR: "₹",
  USD: "$",
  GBP: "£",
  EUR: "€",
};

export default parse_currency;
