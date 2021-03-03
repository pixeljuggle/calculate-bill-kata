function calculateBill(price, vat, tip){
  if ( typeof price !== "number" || typeof vat !== "number" ||  typeof tip !== "number" ) {
    return "error";

  } else {
    const bill = Number(price) + Number(vat) + Number(tip);
    return "£" + String(bill)
  }
};
module.exports = calculateBill;