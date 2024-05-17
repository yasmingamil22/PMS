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
export interface ICreateProject {
 title: string;
 description: string;
}
