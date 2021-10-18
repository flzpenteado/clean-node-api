import { AddAccountRepository } from '../../protocols/add-account-repository'
import {
  AccountModel,
  AddAccount,
  AddAccountModel,
  Encrypter
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor(
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository
  ) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add(accountModel: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountModel.password)
    const account = await this.addAccountRepository.add({
      ...accountModel,
      password: hashedPassword
    })

    return Promise.resolve(account)
  }
}
