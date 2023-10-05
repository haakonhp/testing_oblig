import fs from 'fs';
import path from 'path';

export interface Answer {
    answere: string;
    correct?: boolean;
}

export interface Question {
    title: string;
    answers: Answer[];
    helper: { text: string };
}

const questionsJsonPath = path.resolve(__dirname, 'questions.json');
const rawData = fs.readFileSync(questionsJsonPath, 'utf8');
export const questions: Question[] = JSON.parse(rawData).questions;
