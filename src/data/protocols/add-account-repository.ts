import { AddAccount, AddAccountModel } from '../../domain/use-cases/add-account'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
