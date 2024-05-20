// export interface decoded {
//     userId: number
//     roles: string[]
//     userName: string
//     userEmail: string
//     userGroup: string
//     iat: number
//     exp: number
//   }


export interface iChangePassword {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}

export interface iReset{
  email: string,
  seed: string,
  password: string,
  confirmPassword: string
}

export interface iRequest {
  email: string
}

