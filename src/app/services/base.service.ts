import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


/**
 * Base Service
 *
 */
@Injectable()
export class BaseService {

    // protected errorCode: number;


    /**
     * Constructor
     *
     * @method constructor
     * @param http HttpClient
     */
    constructor(protected http: HttpClient) {

    }

    /**
     * Now we need more than headers we need query string / url parameters
     * So this method is responsible for to convert provided params object to convert into
     * compatible request options params.
     *
     * @method setHeaderOptions
     * @param params object
     */
    protected _setRequestOptions(params?:object, conf?:any): any {

        const requestOptions = {}; // this._setHeaders(conf);

        // if (params) {
        //     requestOptions['params'] = params;
        // }

        // if (conf && conf['fullResponse']) {
        //     requestOptions['observe'] = 'response';
        // }

        return requestOptions;
    }

    /**
     * Send http get request to server.
     *
     * @method __get
     * @param url string
     * @param params object
     */
    protected _get(url:string, params?:object, conf?:any): Observable<any> {

        return this.http.get(`${environment.apiUrl}/${url}`, this._setRequestOptions(params, conf));

    }


    /**
     * Send http put request to server.
     *
     * @method __put
     * @param url string
     * @param putBody object
     */
    protected _put(url:string, putBody:object, conf?:any): Observable<any> {

        return this.http.put(`${environment.apiUrl}/${url}`, putBody);

    }


    /**
     * Send http post request to server
     *
     * @method __post
     * @param url string
     * @param postBody object
     */
    protected _post(url:string, postBody:object, conf?:any): Observable<any> {

        return this.http.post(`${environment.apiUrl}/${url}`, postBody);

    }

    /**
     * Send http delete request to server
     *
     * @method __delete
     * @param url string
     */
    protected _delete(url:string, conf?:any): Observable<any> {

        return this.http.delete(`${environment.apiUrl}/${url}`);

    }
}
