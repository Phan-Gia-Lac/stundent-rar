function shouldTriggerAlert(temp, pressure, humidity) {
  /**
   * Kích hoạt cảnh báo nếu:
   *   (temp > 80 OR pressure > 150) AND humidity > 90
   * C1: temp > 80
   * C2: pressure > 150
   * C3: humidity > 90
   */
  return (temp > 80 || pressure > 150) && humidity > 90;
}


describe('Bài tập WB 6 - MC/DC Testing', () => {
  test.each([
    [90, 160, 95, true],  // TC1
    [70, 160, 95, true],  // TC2
    [90, 140, 95, true],  // TC3
    [70, 140, 95, false], // TC4
    [90, 160, 85, false]  // TC5
  ])('Khi temp=%d, pressure=%d, humidity=%d thì kết quả mong đợi là %p', (temp, pressure, humidity, expected) => {
    expect(shouldTriggerAlert(temp, pressure, humidity)).toBe(expected);
  });
});