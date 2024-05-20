export interface IManager {
  id: number
  userName: string
  imagePath?: string
  email: string
  password: string
  country: string
  phoneNumber: string
  verificationCode: any
  isVerified: boolean
  isActivated: boolean
  creationDate: string
  modificationDate: string
}
