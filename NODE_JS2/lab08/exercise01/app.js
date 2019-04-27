/*
EXERCISE 8.1;
Wykorzystując ścieżki ze wzorcem(string pattern) stwórzmy web serwer, który udostępni końcówkę
pozwalającą wyliczyć nam podatek z podanej kwoty i zwróci nam 2 wartości: podatek oraz kwota bez
podatku.
http://localhost:4500/podatek/19/25
gdzie 19 to podatek, a 25 to kwota
w rezultacie: { "tax": 5, "amount": 20 }*/

const getTax = (taxPercent, amount) => {
  let taxAmount = (taxPercent / 100) * amount;
  let withoutTaxAmount = amount - taxAmount;
  return {
    tax: Math.round(taxAmount),
    amount: Math.round(withoutTaxAmount)
  };
};

const express = require("express");
const app = express();
const router = express.Router();

router.get("/podatek/:taxPercent/:amount", (req, res) => {
    const { taxPercent, amount } = req.params;
  res.send(getTax(taxPercent, amount));
});
app.use(router);
app.listen(4700);
