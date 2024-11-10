export interface Menu {
    label: string;
    icon: string;
    url: string
}


export interface gridinfo {
    height: string;
    width: string;
    rows: number
}

interface StaticIODatas {
    [key: string]: any;  
}

interface ApplicationSettings {
    [key: string]: any; 
}

export interface loginres {
    staticIODatas: StaticIODatas[];
    logo: string;
    mapAllowed: boolean;
    mainmenu: string;
    applicationSettings: ApplicationSettings;
    mapview: boolean;
    CommandsData: string;
    companyRole: string;
    mvtAlertDes: string;
    showAddress: boolean;
    token: string;
    pdfDownloadLogo: string;
    defaultLocation: string;
    entryPoint: string;
    ca: string;
    manageADM: boolean;
}
