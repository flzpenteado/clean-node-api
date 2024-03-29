import { MongoHelper } from '../helpers/mongo-helper'
describe('Account Mongo Repositoty', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return an account on success', async () => {
    // const sut = new AccountMongoRepository()
    // const account = sut.add({
    //   name: 'any_name',
    //   email: 'any@email.com',
    //   password: 'any_password'
    // })
    // expect(account).toBeTruthy()
    // expect(account.id).toBeTruthy()
    // expect(account.name).toBe('any_name')
    // expect(account.email).toBe('any@email.com')
    // expect(account.password).toBe('any_password')
  })
})
