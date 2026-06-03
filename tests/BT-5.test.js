function findTopStudents(students, minScore, limit) {
  if (!Array.isArray(students) || limit <= 0) {
    throw new Error('Tham số không hợp lệ');
  }
  const result = [];
  for (const s of students) {           // LOOP-1: duyệt danh sách
    if (s.score >= minScore) {          // điều kiện lọc
      result.push(s);
      if (result.length >= limit) {     // LOOP-1 exit sớm
        break;
      }
    }
  }
  result.sort((a, b) => b.score - a.score);
  return result;
}


describe('Bài tập WB 5 - Loop Coverage & Params Validation', () => {
  // Test các tham số lỗi đầu vào trước
  test('Bổ sung: Tham số không hợp lệ', () => {
    expect(() => findTopStudents(null, 80, 3)).toThrow('Tham số không hợp lệ');
    expect(() => findTopStudents([], 80, 0)).toThrow('Tham số không hợp lệ');
  });

  test('TC1 - 0 lần lặp: Mảng rỗng', () => {
    expect(findTopStudents([], 80, 3)).toEqual([]);
  });

  test('TC2 - 1 lần lặp: 1 phần tử thỏa mãn', () => {
    const students = [{ name: 'An', score: 85 }];
    expect(findTopStudents(students, 80, 3)).toEqual([{ name: 'An', score: 85 }]);
  });

  test('TC3 - n lần đủ: chạy hết mảng và sắp xếp đúng thứ tự giảm dần', () => {
    const students = [
      { name: 'An', score: 85 },
      { name: 'Bình', score: 95 },
      { name: 'Cường', score: 90 }
    ];
    const expected = [
      { name: 'Bình', score: 95 },
      { name: 'Cường', score: 90 },
      { name: 'An', score: 85 }
    ];
    expect(findTopStudents(students, 80, 5)).toEqual(expected);
  });

  test('TC4 - Break sớm: Dừng vòng lặp khi chạm mức limit', () => {
    const students = [
      { name: 'A', score: 90 },
      { name: 'B', score: 95 },
      { name: 'C', score: 85 }, // Sẽ bị break sau phần tử này vì limit = 3
      { name: 'D', score: 99 }  // Bị bỏ qua hoàn toàn do vòng lặp dừng sớm
    ];
    const result = findTopStudents(students, 80, 3);
    expect(result).toHaveLength(3);
    expect(result[0].name).toBe('B'); // Đảm bảo vẫn sort chính xác tập dữ liệu đã lấy
  });

  test('TC5 - Không ai đủ điểm', () => {
    const students = [{ name: 'An', score: 50 }, { name: 'Bình', score: 60 }];
    expect(findTopStudents(students, 80, 3)).toEqual([]);
  });

  test('TC6 - Biên limit = 1: Thoát ngay từ vòng lặp đầu tiên', () => {
    const students = [{ name: 'An', score: 90 }, { name: 'Bình', score: 95 }];
    expect(findTopStudents(students, 80, 1)).toEqual([{ name: 'An', score: 90 }]);
  });
});