import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { SolutionCreatorInfo, SolutionDataKey, SolutionDataValues, SolutionInfo, SolutionInstallResult, SolutionStep } from '@shared/models/solution-creator.models';
import * as i0 from "@angular/core";
export declare class SolutionsCreatorService {
    private http;
    constructor(http: HttpClient);
    getSolutionById(solutionId: string, config?: RequestConfig): Observable<SolutionCreatorInfo>;
    startSolution(config?: RequestConfig): Observable<SolutionCreatorInfo>;
    clearStep(solutionId: string, step: SolutionStep, config?: RequestConfig): Observable<void>;
    createSolution(solutionId: string, config?: RequestConfig): Observable<SolutionCreatorInfo>;
    chatSolution(solutionId: string, step: SolutionStep, msg: string, config?: RequestConfig): Observable<SolutionCreatorInfo>;
    updateSolutionData(solutionId: string, dataKey: SolutionDataKey, msg: SolutionDataValues, config?: RequestConfig): Observable<SolutionCreatorInfo>;
    installSolution(solutionId: string, config?: RequestConfig): Observable<SolutionInstallResult>;
    uninstallSolution(solutionId: string, config?: RequestConfig): Observable<SolutionCreatorInfo>;
    getSolutions(config?: RequestConfig): Observable<Array<SolutionInfo>>;
    deleteSolution(solutionId: string, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionsCreatorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SolutionsCreatorService>;
}
