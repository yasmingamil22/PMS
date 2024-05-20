export interface ITableData {
    pageNumber: number;
    pageSize: number;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;
    data: IEmployee;
}

export interface IEmployee{
    id: number,
    userName: string,
    isActivated: string,
    phoneNumber: string,
    email: string,
    creationDate: string,
    imagePath:string
    country:string,
    group: IGroup
}

export interface IGroup{
    id: number,
    name: string,
    creationDate: string,
    modificationDate: string
}




