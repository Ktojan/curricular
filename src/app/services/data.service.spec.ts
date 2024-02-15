import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service"

describe('DataService', () => {
    let service: DataService
    let http: HttpClient;

    beforeEach(() => {
        service = new DataService(http);
    })
})
