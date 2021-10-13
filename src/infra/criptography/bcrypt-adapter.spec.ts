import bcrypt from 'bcrypt'
import { BCryptAdapter } from './bcrypt-adapter'

const hashedValue = 'hashed_value'
const salt = 12

const makeSut = (): BCryptAdapter => {
  return new BCryptAdapter(salt)
}

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return Promise.resolve(hashedValue)
  }
}))

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('any_value')
    expect(hashSpy).toBeCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSut()

    const hash = await sut.encrypt('any_value')
    expect(hash).toBe(hashedValue)
  })

  test('Should throw if bcrypt throws', async () => {
    const sut = makeSut()

    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => { throw new Error() })

    const promise = sut.encrypt('any_value')

    await expect(promise).rejects.toThrow()

    const hash = await sut.encrypt('any_value')
    expect(hash).toBe(hashedValue)
  })
})
