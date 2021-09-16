import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  }
}))
describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = new EmailValidatorAdapter()
    sut.isValid('valid@mail.com')
    const isEmailSpy = jest.spyOn(validator, 'isEmail')

    expect(isEmailSpy).toHaveBeenCalledWith('valid@mail.com')
  })
})
