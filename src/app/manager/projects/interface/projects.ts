export interface IProjects {
 id: number;
 title: string;
 description: string;
 creationDate: number;
 modificationDate: number;
 task: [];
}
export interface IProjectData {
 pageNumber: number;
 pageSize: number;
 data: IProjects[];
 totalNumberOfRecords: number;
 totalNumberOfPages: number;
}


export interface IProjectParams {
 title?: string;
 pageSize?: number;
 pageNumber?: number;
}

export interface IProjectsByID {
 id: number;
 title?: string;
 description?: string;
 creationDate: number;
 modificationDate: number;
 task: ITASK[];
 manager: IManager[]
}


export interface ITASK {
 id: number;
 title: string;
 status: string;
 description: string;
 creationDate: number;
 modificationDate: number;
}

export interface IManager {
 id: number
 userName: string;
 imagePath: string;
 email: string;
 country: string;
 phoneNumber: number;
 verificationCode: string;
 isVerified: boolean;
 isActivated: boolean
 creationDate: number;
 modificationDate: number;
}



