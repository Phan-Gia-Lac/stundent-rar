function calculateShipping(weight, distance, isPriority) {
  let fee = 0;

  if (weight <= 0) {                              // D1
    throw new Error('Cân nặng không hợp lệ');
  }
  if (weight <= 1) {                              // D2
    fee = 15_000;
  } else if (weight <= 5) {                       // D3
    fee = 15_000 + (weight - 1) * 5_000;
  } else {
    fee = 35_000 + (weight - 5) * 3_000;
  }
  if (distance > 500) {                           // D4
    fee *= 1.5;
  }
  if (isPriority) {                               // D5
    fee += 20_000;
  }
  return fee;
}


describe('Bài tập WB 4 - Path Coverage', () => {
  test('Path 1: Cân nặng không hợp lệ', () => {
    expect(() => calculateShipping(-1, 100, false)).toThrow('Cân nặng không hợp lệ');
  });

  test('Path 2: Cân nặng <= 1, khoảng cách ngắn, không ưu tiên', () => {
    expect(calculateShipping(0.5, 100, false)).toBe(15000);
  });

  test('Path 3: Cân nặng 1-5, khoảng cách xa, không ưu tiên', () => {
    expect(calculateShipping(3, 600, false)).toBe(37500);
  });

  test('Path 4: Cân nặng > 5, khoảng cách ngắn, có ưu tiên', () => {
    expect(calculateShipping(6, 100, true)).toBe(58000);
  });

  test('Path 5: Cân nặng biên 1, khoảng cách xa, có ưu tiên', () => {
    expect(calculateShipping(1, 600, true)).toBe(42500);
  });

  test('Path 6: Cân nặng biên 2, khoảng cách ngắn, có ưu tiên', () => {
    expect(calculateShipping(2, 100, true)).toBe(40000);
  });
});