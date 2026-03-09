import { MissingTranslationHandler, MissingTranslationHandlerParams, StrictTranslation } from '@ngx-translate/core';
import { Observable } from 'rxjs';
export declare class TbMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams): StrictTranslation | Observable<StrictTranslation>;
}
