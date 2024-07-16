export interface Course {
    _id: string;
    courseCode: string;
    courseName: string;
    prerequisites: string[];
    studentsEnrolled: string[];
}