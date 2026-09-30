import { RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** For exported FILES. Must stay character-identical to the server's DataConstants.NON_PRODUCTION_NOTICE. */
export declare const NON_PRODUCTION_NOTICE = "Development Mode \u2014 non-production use only";
export declare class DevelopmentService {
    private http;
    private rendererFactory;
    private document;
    private renderer;
    private readonly ROOT;
    private noticeElement;
    /** The server's answer, once it has given one. Undefined means it has not been obtained yet. */
    private developmentMode;
    constructor(http: HttpClient, rendererFactory: RendererFactory2, document: Document);
    /**
     * The one answer every rendering acts on, so two renderings can never disagree.
     *
     * Answers are cached; FAILURES never are, so one bad moment cannot decide the question for the whole session.
     * A non-boolean response counts as a failure, not as "no" - an empty body from a proxy must not become `false`.
     * Nothing here converts a failure into an answer; each caller decides what to do when the mode is unknown.
     */
    private resolveDevelopmentMode;
    /**
     * Renders the on-screen notice only if the server says this is a development deployment.
     *
     * The only place a failure may be swallowed: nothing is stored, the viewer is present, and a reload re-probes.
     * Anything that produces a persisted artifact must decline instead - see {@link stampDevelopmentNotice}.
     */
    checkIsDevelopment(): void;
    /**
     * Marks a canvas before whatever serialises it. Gated on the same answer the on-screen notice uses.
     *
     * If the mode cannot be established, or the notice cannot be drawn, THIS FAILS AND NOTHING IS CAPTURED.
     * Marking anyway would assert a false thing about a production deployment; not marking would leak a clean
     * thumbnail of a development one. Declining asserts neither, and an action - unlike a notice - can decline.
     */
    stampDevelopmentNotice(canvas: HTMLCanvasElement): Observable<HTMLCanvasElement>;
    /**
     * For callers that must place the notice themselves, because their format is one this service knows nothing
     * about. What they must NOT duplicate is the decision of whether to stamp, so it is still taken here.
     *
     * Errors propagate and are never turned into `false`; a caller that writes its artifact anyway is making the
     * very default this service refuses to make. Cached answers emit synchronously, so repeat exports do not wait.
     */
    isDevelopmentMode(): Observable<boolean>;
    /** Tracked by reference, not by id, so the id stays unpredictable. Do not reinstate a fixed one to find it by. */
    private createDevelopmentModeComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<DevelopmentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DevelopmentService>;
}
