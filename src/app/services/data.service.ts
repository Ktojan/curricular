
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { Profile } from '../models/profile';
import { Project } from '../models/project';
import { Skill } from '../models/skill';
import { Observable } from 'rxjs';
import { Main } from '../models/main';

@Injectable() export class DataService {

    private _url!: string;

    public set url(url: string){
        this._url = url;
    }
 
    public static DATA = './assets/data.json';
    public static JSON = 'application/json';

    constructor(private http: HttpClient) { }

    public getData(){ //}: Observable<(Main)> {
        return this.http.get<Main[]>(this._url)
            //.pipe(tap(res => console.log('All: ', res)));       
    }

    public getSection(section: string){ //}: Observable<(Education | Experience | Profile | Project | Skill)[]> {
        return this.http.get(this._url)
            .pipe(
                map(items => items[section]),
                //tap(res => console.log(`Section ${section}: `, res))
            )
    }

    public getProject(projectName: string): Observable<(any)[]> {
        return this.http.get(this._url)
            .pipe(
                map(items => items['projects'].find((pr: { name: string }) => pr.name === projectName))
            )
    }
}


