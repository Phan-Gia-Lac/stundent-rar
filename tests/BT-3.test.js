function canApplyLoan(age, income, creditScore) {
  // C1: tuổi hợp lệ | C2: thu nhập đủ | C3: điểm tín dụng đủ
  const eligible =
    (age >= 18 && age <= 65) &&   // C1
    income >= 5_000_000 &&         // C2
    creditScore >= 600;            // C3

  if (!eligible) {
    return { approved: false, reason: 'Không đủ điều kiện' };
  }
  return { approved: true, limit: income * 12 };
}


describe('Bài tập WB 3 - Condition Coverage', () => {
  test('TC1: Tất cả điều kiện con đều đúng', () => {
    expect(canApplyLoan(30, 10000000, 700)).toEqual({ approved: true, limit: 120000000 });
  });

  test('TC2: C1 sai (Tuổi nhỏ hơn 18)', () => {
    expect(canApplyLoan(15, 6000000, 650)).toEqual({ approved: false, reason: 'Không đủ điều kiện' });
  });

  test('TC3: C2 sai (Thu nhập không đủ)', () => {
    expect(canApplyLoan(25, 3000000, 800)).toEqual({ approved: false, reason: 'Không đủ điều kiện' });
  });

  test('TC4: C3 sai (Điểm tín dụng thấp)', () => {
    expect(canApplyLoan(40, 7000000, 500)).toEqual({ approved: false, reason: 'Không đủ điều kiện' });
  });
});