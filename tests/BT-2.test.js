function processOrder(order) {
  let total = order.price * order.qty;          // S1

  if (order.member) {                            // Branch A
    total *= 0.9;                               // A-true: giảm 10%
  }

  if (total > 500) {                             // Branch B
    total -= 50;                                // B-true: giảm 50k
  } else {
    total += 30;                                // B-false: phí ship
  }

  if (order.voucher && order.voucher > 0) {     // Branch C
    total -= order.voucher;                     // C-true
  }

  return Math.max(0, total);
}


describe('Bài tập WB 2 - Branch Coverage', () => {
  test('TC1: Cover A-true, B-true, C-true', () => {
    const order = { price: 600, qty: 1, member: true, voucher: 20 };
    expect(processOrder(order)).toBe(470);
  });

  test('TC2: Cover A-false, B-false, C-false', () => {
    const order = { price: 100, qty: 2, member: false, voucher: 0 };
    expect(processOrder(order)).toBe(230);
  });
});