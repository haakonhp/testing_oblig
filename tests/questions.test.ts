import questionsData from '../src/questions.json';


    interface Answer {
    answer: string;
    correct?: boolean;
}

interface Question {
    title: string;
    answers: Answer[];
    helper: { text: string };
}

const questions: Question[] = questionsData.questions;

describe('Questions Data', () => {

    it('should contain at least one question', () => {
        expect(questions.length).toBeGreaterThan(0);
    });

    it('each question should have a title, answers, and a helper text', () => {
        questions.forEach(question => {
            expect(question).toHaveProperty('title');
            expect(typeof question.title).toBe('string');
            expect(question).toHaveProperty('answers');
            expect(Array.isArray(question.answers)).toBeTruthy();
            expect(question).toHaveProperty('helper');
            expect(typeof question.helper.text).toBe('string');
        });
    });

    it('each answer set should contain exactly one correct answer', () => {
        questions.forEach(question => {
            const correctAnswers = question.answers.filter(answer => answer.correct === true);
            expect(correctAnswers.length).toBe(1);
        });
    });

    it('all questions should have at least two answer options', () => {
        questions.forEach(question => {
            expect(question.answers.length).toBeGreaterThanOrEqual(2);
        });
    });

    it('answer options should be non-empty strings', () => {
        questions.forEach(question => {
            question.answers.forEach(answer => {
                expect(answer).toHaveProperty('answere');
                expect(typeof answer.answer).toBe('string');
                expect(answer.answer.trim().length).toBeGreaterThan(0);
            });
        });
    });

    it('helper texts should be non-empty strings', () => {
        questions.forEach(question => {
            expect(question.helper.text.trim().length).toBeGreaterThan(0);
        });
    });
});

describe('Answer Validations', () => {

    it('should have no duplicate answer options per question', () => {
        questions.forEach(question => {
            const answerTexts = question.answers.map(a => a.answer);
            const uniqueAnswerTexts = Array.from(new Set(answerTexts));
            expect(answerTexts.length).toBe(uniqueAnswerTexts.length);
        });
    });

    it('should not have identical titles for different questions', () => {
        const titles = questions.map(q => q.title);
        const uniqueTitles = Array.from(new Set(titles));
        expect(titles.length).toBe(uniqueTitles.length);
    });
});