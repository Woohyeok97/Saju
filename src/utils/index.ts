// 생년월일 변환 함수
export function formatBirth(birthDay: string, birthTime: string): string {
  const [year, month, day] = birthDay.split('-');
  return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일 ${birthTime}`;
}