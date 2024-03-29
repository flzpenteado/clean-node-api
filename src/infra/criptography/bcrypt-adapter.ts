import bcrypt from 'bcrypt'

import { Encrypter } from '../../data/protocols/encrypter'

export class BCryptAdapter implements Encrypter {
  private readonly salt

  constructor(salt: number) {
    this.salt = salt
  }

  async encrypt(value: string): Promise<string> {
    const hash = bcrypt.hash(value, this.salt)

    return hash
  }
}
