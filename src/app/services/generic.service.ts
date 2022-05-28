
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
// import { environment } from 'environments/environment';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';


/**
 * Base Service Class
 *
 * Responsible to server almost every service in entire project.
 *
 * @class GenericService
 */
@Injectable()
export class GenericService extends BaseService {

    /**
     * Constructor
     *
     *
     * @method constructor
     * @param http Http
     */
    constructor(
        protected _http: HttpClient,
        // private _matSnackBar: MatSnackBar
    ) {
        super(_http);
    }


    /**
     * Send http get request to server.
     *
     * @method get
     * @param url string
     * @param params object
     */
    public get(url:string, params?:object, conf?:any): Observable<any> {
        return this._get(url, params, conf); // .map(data => { return data; });
    }


    /**
     * Send http put request to server.
     *
     * @method put
     * @param url string
     * @param putBody object
     */
    public put(url:string, putBody:object, conf?:any): Observable<any> {

        return this._put(url, putBody, conf); // .map(data => { return data; });

    }


    /**
     * Send http post request to server
     *
     * @method post
     * @param url string
     * @param postBody object
     */
    public post(url:string, postBody:object, conf?:any): Observable<any> {

        return this._post(url, postBody, conf); // .map(data => { return data; });

    }


    /**
     * Send http delete request to server
     *
     * @method delete
     * @param url string
     */
    public delete(url:string, conf?:any): Observable<any> {

        return this._delete(url, conf); // .map(data => { return data; });

    }

    /**
     * To display success message
     *
     * @param msg string
     */
    // public successFlashMessage(msg): void {
    //     this._matSnackBar.open(msg, 'Ok', { verticalPosition: 'top', duration: 2000 });
    // }

    // public errorFlashMessage(msg): void {

    //     this._matSnackBar.open(msg, 'Error', { verticalPosition: 'top', duration: 5000, panelClass: ['red-snackbar'] });

    // }


    /**
     * stop request to server
     * 
     */
    public stopRequest: Subject<void> = new Subject<void>();


}
