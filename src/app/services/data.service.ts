
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() export class DataService {

    private _url: string;
    private _responseType;

    public set url(url: string){
        this._url = url;
    }

    public set responseType(responseType: string){
        this._responseType = responseType;
    }

    public static DATA = './assets/data.json';
    public static JSON = 'json';
    public static TEXT = 'text';

    constructor(private http: HttpClient) { }

    public getData() {
        return this.http.get(this._url, {responseType: this._responseType});
    }

}
