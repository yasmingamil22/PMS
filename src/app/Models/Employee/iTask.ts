export interface iTask {
  id: number
  title: string
  description: string
  status: string
  creationDate: string
  modificationDate: string
  project: iProject
  employee: iEmployee
}

export interface iProject {
  id: number
  title: string
  description: string
  creationDate: string
  modificationDate: string
}

export interface iEmployee {
  id: number
  userName: string
  imagePath: string
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

export interface iEmployeeProjects {
  id: number
  title: string
  description: string
  creationDate: string
  modificationDate: string
  task: iTask[]
}

// export interface IPage {
//   pageNumber: number
//   pageSize: number
//   data: iEmployeeProjects[]
//   totalNumberOfRecords: number
//   totalNumberOfPages: number
// }
