import { Skill } from "./skill";

export interface Person {
    firstName: string;
    lastName: string;
    jobTitle: string;
    imageURL: string;
    summary: string;
    email: string;
    linkedIn: string;
    addressL1: string;
    addressL2: string;
    skills: Array<Skill>;
}