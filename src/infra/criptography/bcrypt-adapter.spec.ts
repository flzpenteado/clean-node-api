import bcrypt from 'bcrypt'
import { BCryptAdapter } from './bcrypt-adapter'

const hashedValue = 'hashed_value'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return Promise.resolve(hashedValue)
  }
}))

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BCryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('any_value')
    expect(hashSpy).toBeCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const salt = 12
    const sut = new BCryptAdapter(salt)

    const hash = await sut.encrypt('any_value')
    expect(hash).toBe(hashedValue)
  })
})
