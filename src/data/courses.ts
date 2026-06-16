export interface Course {
  id: number;
  name: string;
  professor: string;
  credit: number;
  score: number;
  rate: string;
}

export const courses: Course[] = [
  { id: 1, name: "Body structure I (Anatomy & Histology & Imaging) (Musculoskeletal system)", professor: "Marina Nebieridze", credit: 8, score: 31, rate: "F" },
  { id: 2, name: "Cell Biology (Cell Biology and Medical Biophysics)", professor: "Lali Koptonashvili", credit: 6, score: 30, rate: "F" },
  { id: 3, name: "Introduction to Psychology", professor: "Natia Badridze", credit: 2, score: 49, rate: "F" },
  { id: 4, name: "Clinical and Professional skills I (CAPS I) and Medical Ethics", professor: "Nana Nikolaishvili", credit: 4, score: 54, rate: "F" },
  { id: 5, name: "Body Function I (Introduction to Physiology & Biochemistry)", professor: "Joneta Gvazava", credit: 6, score: 36, rate: "F" },
  { id: 6, name: "Georgian Language I", professor: "gvantsa tushishvili", credit: 4, score: 33, rate: "F" },
];
