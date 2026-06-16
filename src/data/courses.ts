export interface Course {
  id: number;
  name: string;
  professor: string;
  credit: number;
  score: number;
}

export function getGrade(score: number): string {
  if (score >= 91) return "A";
  if (score >= 81) return "B";
  if (score >= 71) return "C";
  if (score >= 61) return "D";
  return "F";
}

export function getGradePoints(score: number): number {
  if (score >= 91) return 4.0;
  if (score >= 81) return 3.0;
  if (score >= 71) return 2.0;
  if (score >= 61) return 1.0;
  return 0.0;
}

export function gradeColor(grade: string): string {
  switch (grade) {
    case "A": return "bg-green-500";
    case "B": return "bg-blue-500";
    case "C": return "bg-yellow-500";
    case "D": return "bg-orange-400";
    default:  return "bg-red-500";
  }
}

export function calcGPA(courses: Course[]): string {
  const totalCredits = courses.reduce((s, c) => s + c.credit, 0);
  if (totalCredits === 0) return "0.00";
  const weighted = courses.reduce((s, c) => s + getGradePoints(c.score) * c.credit, 0);
  return (weighted / totalCredits).toFixed(2);
}

export const defaultCourses: Course[] = [
  { id: 1, name: "Body structure I (Anatomy & Histology & Imaging) (Musculoskeletal system)", professor: "Marina Nebieridze", credit: 8, score: 31 },
  { id: 2, name: "Cell Biology (Cell Biology and Medical Biophysics)", professor: "Lali Koptonashvili", credit: 6, score: 30 },
  { id: 3, name: "Introduction to Psychology", professor: "Natia Badridze", credit: 2, score: 49 },
  { id: 4, name: "Clinical and Professional skills I (CAPS I) and Medical Ethics", professor: "Nana Nikolaishvili", credit: 4, score: 54 },
  { id: 5, name: "Body Function I (Introduction to Physiology & Biochemistry)", professor: "Joneta Gvazava", credit: 6, score: 36 },
  { id: 6, name: "Georgian Language I", professor: "gvantsa tushishvili", credit: 4, score: 33 },
];
