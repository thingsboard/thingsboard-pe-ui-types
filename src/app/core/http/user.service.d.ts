import { RequestConfig } from './http-utils';
import { User, UserEmailInfo, UserInfo } from '@shared/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class UserService {
    private http;
    constructor(http: HttpClient);
    getTenantAdmins(tenantId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<User>>;
    getCustomerUsers(customerId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<User>>;
    getAllCustomerUsers(pageLink: PageLink, config?: RequestConfig): Observable<PageData<User>>;
    getUsersForAssign(alarmId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<UserEmailInfo>>;
    getUser(userId: string, config?: RequestConfig): Observable<User>;
    getUserInfo(userId: string, config?: RequestConfig): Observable<UserInfo>;
    getUsers(userIds: Array<string>, config?: RequestConfig): Observable<Array<User>>;
    getUserUsers(pageLink: PageLink, config?: RequestConfig): Observable<PageData<User>>;
    getAllUserInfos(includeCustomers: boolean, pageLink: PageLink, config?: RequestConfig): Observable<PageData<UserInfo>>;
    getCustomerUserInfos(includeCustomers: boolean, customerId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<UserInfo>>;
    saveUser(user: User, sendActivationMail?: boolean, entityGroupIds?: string | string[], config?: RequestConfig): Observable<User>;
    deleteUser(userId: string, config?: RequestConfig): Observable<Object>;
    getActivationLink(userId: string, config?: RequestConfig): Observable<string>;
    sendActivationEmail(email: string, config?: RequestConfig): Observable<Object>;
    setUserCredentialsEnabled(userId: string, userCredentialsEnabled?: boolean, config?: RequestConfig): Observable<any>;
    findUsersByQuery(pageLink: PageLink, config?: RequestConfig): Observable<PageData<UserEmailInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
