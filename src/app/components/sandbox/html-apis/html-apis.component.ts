import { Component, ElementRef, ViewChild } from "@angular/core";
import { HTML_APIS_CODECHUNK } from "../sandbox.data";


@Component({
  selector: "app-html-apis",
  templateUrl: "./html-apis.component.html",
  styleUrls: ["./html-apis.component.css"],
})
export class HtmlApisComponent {
  @ViewChild('storageMessage', { read: ElementRef }) storageModal:ElementRef<any>;
  
  code = HTML_APIS_CODECHUNK;
  // --------- geolocation ----------
  isHtmlMode = false;
  userLocation: GeolocationObject | string;
  isSupportGeo: boolean = false;
  // --------- local\session storage ----------
  storagesAreEmpty = true;
  localSt = "";
  sessionSt = "";
  modalText = "";

  toggleHtml(curValue: boolean = false) {
    this.isHtmlMode = curValue;
  }
  // --------- geolocation ----------
  geoLocation(): void {
    const pos = window.navigator.geolocation;
    this.isSupportGeo = Boolean(pos);
    if (!this.isSupportGeo) {
      this.userLocation =
        "Your browser doesn't support the Geolocation API or you've blocked permission";
      return;
    }
    pos.getCurrentPosition((loc: any) => {
      this.userLocation = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      };
    });
  }

  // --------- local\session storage ----------
  setToStorages() {
    this.modalText = '';
      window.localStorage.setItem("localstuff", "Don't forget to buy local vegetables and greenery");
      this.modalText += window.localStorage ? ' Localstorage updated!'
      : ' Localstorage is unavailable... ';
      window.sessionStorage.setItem("sessiondeal", "When did you last time have session with your dentist?..");
      this.modalText += window.sessionStorage ? ' Session storage updated!'
      : ' Sessionstorage is unavailable...';
    this.storagesAreEmpty = false;
    this.getFromStorages();
    this.openModalStorage();
  }

  getFromStorages(noModal: boolean = false) {
    this.localSt = window.localStorage.localstuff;
    this.sessionSt = window.sessionStorage.sessiondeal;
    if (!noModal && !this.localSt && !this.sessionSt) {
      this.modalText = "Well, there is no demanded properties in storages. Yeah...";
      this.openModalStorage();
    }
  }

  clearStorages() {
    window.localStorage.removeItem("localstuff");
    window.sessionStorage.removeItem("sessiondeal");
    this.getFromStorages(true);
  }

  reloadPage() {
    window.document.location.reload()
  }

  private openModalStorage() {
    this.storageModal.nativeElement.showModal();
  }
}

interface GeolocationObject {
  latitude: number;
  longitude: number;
  country?: string;
}
