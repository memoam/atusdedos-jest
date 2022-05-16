import { render, screen, fireEvent } from '@testing-library/react'
import SingUp from '@/components/singUp'
import {
    validateEmail,
    validateFormSingUp,
    passwordLengtg,
    password,
} from '../services/validations/auth';

const user = {
    name: '',
    lastName: '',
    middleName: '',
    email: 'memoangeles180@gmail.com',
    password: 'memomacias',
    passwordConfirmation: 'memomacias',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
};

beforeEach(() => { render(<SingUp />) })
describe('SingUp', () => {
    it('must display a title', () => {
        expect(screen.queryByText(/Crear Cuenta/i)).toBeInTheDocument();
    })
    it('input must not be empty', () => {
        const inputName = screen.getByLabelText(/Apellido Paterno/i)
        expect(inputName).toBeInTheDocument()
    })
    it('input must not be empty', () => {
        const inputName = screen.getByLabelText(/Apellido Paterno/i)
        fireEvent.change(inputName, { target: { value: 'Hector Guillermo' } })
    })
    it('email format validation -> true', () => {
        expect(validateEmail(user.email)).toBe(true)
    })
    it('form validation empy -> false', () => {
        expect(validateFormSingUp(user)).toBe(false)
    })
    it('password Lengtg validation -> true', () => {
        expect(passwordLengtg(user)).toBe(true)
    })
    it('password validation -> true', () => {
        expect(password(user)).toBe(true)
    })
})
