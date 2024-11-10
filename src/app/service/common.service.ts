import { Injectable } from '@angular/core';
import { loginres } from '../interface/common.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }




  sessionData(res: any): void {
    sessionStorage.setItem('companyLogo', res[1]["logo"]);
    sessionStorage.setItem("mapAllowed", res[1]["mapAllowed"]);
    sessionStorage.setItem('mainMenu', res[1]["mainmenu"]);
    sessionStorage.setItem('loginData', JSON.stringify(res));
    sessionStorage.setItem('staticIOData', JSON.stringify(res[0]["staticIODatas"]));
    sessionStorage.setItem('appSettings', res[1]["applicationSettings"]);
    sessionStorage.setItem('map', res[1]["mapview"]);
    sessionStorage.setItem('commandsData', res[1]["CommandsData"]);
    sessionStorage.setItem('companyRole', res[1]["companyRole"]);
    sessionStorage.setItem('AlertsData', res[1]["mvtAlertDes"]);
    sessionStorage.setItem("addressreport", res[1]["showAddress"]);
    sessionStorage.setItem("token", res[1]["token"]);
    sessionStorage.setItem("pdfDownloadLogo", res[1]["pdfDownloadLogo"]);
    sessionStorage.setItem("defaultLocation", res[1]["defaultLocation"]);
    sessionStorage.setItem("entryPoint", res[1]["entryPoint"]);
    sessionStorage.setItem("ca", res[1]["ca"]);
    sessionStorage.setItem("manageADM", res[1]["manageADM"]);
    sessionStorage.setItem("companyRole", res[1]["companyRole"]);
    sessionStorage.setItem("companyId", res[1]["companyId"]);
  }

  sessionClear():void{
    sessionStorage.clear();
  }


}
