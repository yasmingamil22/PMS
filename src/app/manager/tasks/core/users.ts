
export interface Users {
    id: number
    userName: string
    email: string
    country: string
    phoneNumber: string
    imagePath: any
    isActivated: boolean
    creationDate: string
    modificationDate: string
  }
  export interface projects {
    id: number
    title: string
    description: string
    creationDate: string
    modificationDate: string
    manager: Manager
  }
  
  export interface Manager {
    id: number
    userName: string
    imagePath: string
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
  