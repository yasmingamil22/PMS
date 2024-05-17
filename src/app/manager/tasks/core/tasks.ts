
export interface Tasks {
    id: number
    title: string
    description: string
    status: string
    creationDate: string
    modificationDate: string
    project: Project
    employee: Employee
  }
  
  export interface Project {
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
  
  export interface Employee {
    id: number
    userName: string
    imagePath: any
    email: string
    password: string
    country: string
    phoneNumber: string
    verificationCode: string
    isVerified: boolean
    isActivated: boolean
    creationDate: string
    modificationDate: string
  }