import { render, screen, fireEvent } from '@testing-library/react'
import Exam from '@/components/dashboard/exam'
import {
    validateFormExam,
    evaluateExam,
} from '../services/validations/auth';

const data = ['a', '', '', '', '', '', '', '', '', '',];

beforeEach(() => { render(<Exam />) })
describe('Exam', () => {
    it('form validation empy -> true', () => {
        expect(validateFormExam(data)).toBe(true)
    })
    it('evaluate exam -> true', () => {
        expect(evaluateExam(data)).toBe(10)
    })
})
