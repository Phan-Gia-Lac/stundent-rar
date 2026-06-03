/* 
Để đạt 100% Statement Coverage, mọi dòng lệnh từ S1 đến S7 đều phải được thực thi ít nhất một lần.
Cần tối thiểu 2 test cases.
TC1: Kích hoạt nhánh lỗi height <= 0 để thực thi S1 và S2. 
TC2: Đi thẳng vào nhánh tính toán S3, và vì cấu trúc logic là chuỗi if liên tiếp không có else,
một giá trị BMI lớn (rơi vào Béo phì) sẽ chạy qua các kiểm tra điều kiện S4, S5, S6 rồi kết thúc ở S7.  */

function classifyBMI(weight, height) {
  if (height <= 0) {                          // S1
    throw new Error('Chiều cao không hợp lệ'); // S2
  }
  const bmi = weight / (height * height);       // S3
  if (bmi < 18.5) return 'Thiếu cân';           // S4
  if (bmi < 25.0) return 'Bình thường';         // S5
  if (bmi < 30.0) return 'Thừa cân';            // S6
  return 'Béo phì';                             // S7
}

describe('Bài tập WB 1 - Statement Coverage', () => {
  // Thực thi S1, S2
  test('TC1: Chiều cao không hợp lệ (height <= 0)', () => {
    expect(() => classifyBMI(60, 0)).toThrow('Chiều cao không hợp lệ');
    expect(() => classifyBMI(60, -1)).toThrow('Chiều cao không hợp lệ');
  });

  // Thực thi S3, S4, S5, S6, S7
  test('TC2: Đạt phân loại Béo phì để cover hết các dòng điều kiện còn lại', () => {
    // weight = 100, height = 1.6 => BMI = 100 / 2.56 = 39.06 (Béo phì)
    // Sẽ chạy qua kiểm tra S4 (F), S5 (F), S6 (F) và kết thúc tại S7 (T)
    expect(classifyBMI(100, 1.6)).toBe('Béo phì');
  });
});


