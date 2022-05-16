import { render, screen, fireEvent } from '@testing-library/react'
import SingIn from '@/components/singIn'
import {
    validateEmail,
    validateFormSingIN,
} from '../services/validations/auth';

const user = {
    email: 'memoangeles180@gmail.com',
    password: 'memomacias',
};

beforeEach(() => { render(<SingIn />) })
describe('SingIn', () => {
    it('email format validation -> true', () => {
        expect(validateEmail(user.email)).toBe(true)
    })
    it('form validation empy -> true', () => {
        expect(validateFormSingIN(user)).toBe(true)
    })
})
