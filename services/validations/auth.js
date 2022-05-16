export function validateEmail(email) {
    return (/^(([^<>()[\]/.,;:\s@/"]+(\.[^<>()[\]/.,;:\s@/"]+)*)|('.+'))@(([^<>()[\]/.,;:\s@/"]+\.)+[^<>()[\]/.,;:\s/"]{2,})$/i.test(email))
}
export function validateFormSingUp(user) {
    return (user.name !== '' && user.lastName !== '' && user.middleName !== '' && user.email !== '' && user.password !== '' && user.passwordConfirmation !== '' && user.birthDay !== '' && user.birthMonth !== '' && user.birthYear !== '')
}
export function passwordLengtg(user) {
    return (user.password.length >= 6 || user.passwordConfirmation.length >= 6)
}
export function password(user) {
    return (user.password === user.passwordConfirmation)
}
export function validateFormSingIN(user) {
    return (user.email !== '' && user.password !== '')
}