import {
  AddAccount,
  AddAccountModel
} from '../../../domain/use-cases/add-account'
import { AccountModel } from '../../../domain/use-cases/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)

    return Promise.resolve({
      id: '',
      name: '',
      email: '',
      password: ''
    })
  }
}
