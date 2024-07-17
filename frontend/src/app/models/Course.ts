export interface Course {
    _id: string;
    courseCode: string;
    courseName: string;
    faculty: string;
    courseDesc: string;
    courseDuration: string;
    prerequisites: string[];
    studentsEnrolled: string[];
}