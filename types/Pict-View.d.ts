export = PictView;
/** @typedef {(error?: Error) => void} ErrorCallback */
/** @typedef {number | boolean} PictTimestamp */
/**
 * @typedef {Object} Renderable
 *
 * @property {string} RenderableHash - A unique hash for the renderable.
 * @property {string} TemplateHash] - The hash of the template to use for rendering this renderable.
 * @property {string} [DefaultTemplateRecordAddress] - The default address for resolving the data record for this renderable.
 * @property {string} [ContentDestinationAddress] - The default address (DOM CSS selector) for rendering the content of this renderable.
 * @property {string} [RenderMethod] - The method to use when rendering the renderable ('replace', 'append', 'prepend', 'append_once').
 */
/**
 * Represents a view in the Pict ecosystem.
 */
declare class PictView {
    /**
     * @param {any} pFable - The Fable object that this service is attached to.
     * @param {any} [pOptions] - (optional) The options for this service.
     * @param {string} [pServiceHash] - (optional) The hash of the service.
     */
    constructor(pFable: any, pOptions?: any, pServiceHash?: string);
    /** @type {any} */
    fable: any;
    /** @type {any} */
    options: any;
    /** @type {String} */
    UUID: string;
    /** @type {String} */
    Hash: string;
    /** @type {any} */
    log: any;
    serviceType: string;
    /** @type {import('pict') & { log: any, instantiateServiceProviderWithoutRegistration: (hash: String) => any }} */
    pict: import("pict") & {
        log: any;
        instantiateServiceProviderWithoutRegistration: (hash: string) => any;
    };
    AppData: any;
    /** @type {PictTimestamp} */
    initializeTimestamp: PictTimestamp;
    /** @type {PictTimestamp} */
    lastSolvedTimestamp: PictTimestamp;
    /** @type {PictTimestamp} */
    lastRenderedTimestamp: PictTimestamp;
    /** @type {PictTimestamp} */
    lastMarshalFromViewTimestamp: PictTimestamp;
    /** @type {PictTimestamp} */
    lastMarshalToViewTimestamp: PictTimestamp;
    /** @type {Object<String, Renderable>} */
    renderables: any;
    /**
     * Adds a renderable to the view.
     *
     * @param {string | Renderable} pRenderableHash - The hash of the renderable, or a renderable object.
     * @param {string} [pTemplateHash] - (optional) The hash of the template for the renderable.
     * @param {string} [pDefaultTemplateRecordAddress] - (optional) The default data address for the template.
     * @param {string} [pDefaultDestinationAddress] - (optional) The default destination address for the renderable.
     * @param {string} [pRenderMethod] - (optional) The method to use when rendering the renderable (ex. 'replace').
     */
    addRenderable(pRenderableHash: string | Renderable, pTemplateHash?: string, pDefaultTemplateRecordAddress?: string, pDefaultDestinationAddress?: string, pRenderMethod?: string): void;
    /**
     * Lifecycle hook that triggers before the view is initialized.
     */
    onBeforeInitialize(): boolean;
    /**
     * Lifecycle hook that triggers before the view is initialized (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onBeforeInitializeAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers when the view is initialized.
     */
    onInitialize(): boolean;
    /**
     * Lifecycle hook that triggers when the view is initialized (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onInitializeAsync(fCallback: ErrorCallback): void;
    /**
     * Performs view initialization.
     */
    initialize(): boolean;
    /**
     * Performs view initialization (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    initializeAsync(fCallback: ErrorCallback): void;
    onAfterInitialize(): boolean;
    /**
     * Lifecycle hook that triggers after the view is initialized (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onAfterInitializeAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers before the view is rendered.
     *
     * @param {any} [pRenderable] - The renderable that will be rendered.
     * @param {string} [pRenderDestinationAddress] - The address where the renderable will be rendered.
     * @param {any} [pRecord] - The record (data) that will be used to render the renderable.
     */
    onBeforeRender(pRenderable?: any, pRenderDestinationAddress?: string, pRecord?: any): boolean;
    /**
     * Lifecycle hook that triggers before the view is rendered (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onBeforeRenderAsync(fCallback: ErrorCallback): void;
    /**
     * Render a renderable from this view.
     *
     * @param {string} [pRenderable] - The hash of the renderable to render.
     * @param {string} [pRenderDestinationAddress] - The address where the renderable will be rendered.
     * @param {string} [pTemplateRecordAddress] - The address where the data for the template is stored.
     */
    render(pRenderable?: string, pRenderDestinationAddress?: string, pTemplateRecordAddress?: string): boolean;
    /**
     * Render a renderable from this view.
     *
     * @param {string | ErrorCallback} [pRenderableHash] - The hash of the renderable to render.
     * @param {string | ErrorCallback} [pRenderDestinationAddress] - The address where the renderable will be rendered.
     * @param {string | ErrorCallback} [pTemplateRecordAddress] - The address where the data for the template is stored.
     * @param {ErrorCallback} [fCallback] - The callback to call when the async operation is complete.
     */
    renderAsync(pRenderableHash?: string | ErrorCallback, pRenderDestinationAddress?: string | ErrorCallback, pTemplateRecordAddress?: string | ErrorCallback, fCallback?: ErrorCallback): void;
    /**
     * Renders the default renderable.
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    renderDefaultAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers after the view is rendered.
     *
     * @param {any} [pRenderable] - The renderable that was rendered.
     * @param {string} [pRenderDestinationAddress] - The address where the renderable was rendered.
     * @param {any} [pRecord] - The record (data) that was used by the renderable.
     * @param {string} [pContent] - The content that was rendered.
     */
    onAfterRender(pRenderable?: any, pRenderDestinationAddress?: string, pRecord?: any, pContent?: string): boolean;
    /**
     * Lifecycle hook that triggers after the view is rendered (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onAfterRenderAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers before the view is solved.
     */
    onBeforeSolve(): boolean;
    /**
     * Lifecycle hook that triggers before the view is solved (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onBeforeSolveAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers when the view is solved.
     */
    onSolve(): boolean;
    /**
     * Lifecycle hook that triggers when the view is solved (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onSolveAsync(fCallback: ErrorCallback): void;
    /**
     * Performs view solving and triggers lifecycle hooks.
     *
     * @return {boolean} - True if the view was solved successfully, false otherwise.
     */
    solve(): boolean;
    /**
     * Performs view solving and triggers lifecycle hooks (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    solveAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers after the view is solved.
     */
    onAfterSolve(): boolean;
    /**
     * Lifecycle hook that triggers after the view is solved (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onAfterSolveAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers before data is marshaled from the view.
     *
     * @return {boolean} - True if the operation was successful, false otherwise.
     */
    onBeforeMarshalFromView(): boolean;
    /**
     * Lifecycle hook that triggers before data is marshaled from the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onBeforeMarshalFromViewAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers when data is marshaled from the view.
     */
    onMarshalFromView(): boolean;
    /**
     * Lifecycle hook that triggers when data is marshaled from the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onMarshalFromViewAsync(fCallback: ErrorCallback): void;
    /**
     * Marshals data from the view.
     *
     * @return {boolean} - True if the operation was successful, false otherwise.
     */
    marshalFromView(): boolean;
    /**
     * Marshals data from the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    marshalFromViewAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers after data is marshaled from the view.
     */
    onAfterMarshalFromView(): boolean;
    /**
     * Lifecycle hook that triggers after data is marshaled from the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onAfterMarshalFromViewAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers before data is marshaled into the view.
     */
    onBeforeMarshalToView(): boolean;
    /**
     * Lifecycle hook that triggers before data is marshaled into the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onBeforeMarshalToViewAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers when data is marshaled into the view.
     */
    onMarshalToView(): boolean;
    /**
     * Lifecycle hook that triggers when data is marshaled into the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onMarshalToViewAsync(fCallback: ErrorCallback): void;
    /**
     * Marshals data into the view.
     *
     * @return {boolean} - True if the operation was successful, false otherwise.
     */
    marshalToView(): boolean;
    /**
     * Marshals data into the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    marshalToViewAsync(fCallback: ErrorCallback): void;
    /**
     * Lifecycle hook that triggers after data is marshaled into the view.
     */
    onAfterMarshalToView(): boolean;
    /**
     * Lifecycle hook that triggers after data is marshaled into the view (async flow).
     *
     * @param {ErrorCallback} fCallback - The callback to call when the async operation is complete.
     */
    onAfterMarshalToViewAsync(fCallback: ErrorCallback): void;
    /** @return {boolean} - True if the object is a PictView. */
    get isPictView(): boolean;
}
declare namespace PictView {
    export { ErrorCallback, PictTimestamp, Renderable };
}
type ErrorCallback = (error?: Error) => void;
type PictTimestamp = number | boolean;
type Renderable = {
    /**
     * - A unique hash for the renderable.
     */
    RenderableHash: string;
    /**
     * ] - The hash of the template to use for rendering this renderable.
     */
    TemplateHash: string;
    /**
     * - The default address for resolving the data record for this renderable.
     */
    DefaultTemplateRecordAddress?: string;
    /**
     * - The default address (DOM CSS selector) for rendering the content of this renderable.
     */
    ContentDestinationAddress?: string;
    /**
     * - The method to use when rendering the renderable ('replace', 'append', 'prepend', 'append_once').
     */
    RenderMethod?: string;
};
//# sourceMappingURL=Pict-View.d.ts.map