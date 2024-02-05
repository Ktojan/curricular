
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Main } from '../models/main';

@Injectable({ providedIn: 'root'}) export class DataService {

    private _url!: string;

    public set url(url: string){
        this._url = url;
    }
 
    public static DATA = './assets/data.json';
    public static JSON = 'application/json';

    constructor(private http: HttpClient) { }

    public getData(){
        return this.http.get<Main[]>(this._url)
    }

    public getSection(section: string){
        return this.http.get(this._url)
            .pipe(
                map((items: any) => items[section]),
            )
    }

    public getProject(projectName: string): Observable<(any)[]> {
        return this.http.get(this._url)
            .pipe(
                map((items: any) => items['projects'].find((pr: { name: string }) => pr.name === projectName))
            )
    }
}


