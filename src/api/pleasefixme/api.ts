/* tslint:disable */
/* eslint-disable */
/**
 * please-fix-me-reporter-api API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'customerName': string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'details': string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'reportedOn'?: string;
}
/**
 * 
 * @export
 * @interface Defect
 */
export interface Defect {
    /**
     * 
     * @type {ObjectId}
     * @memberof Defect
     */
    'id'?: ObjectId;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'businessName'?: string;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'offeringName'?: string;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'status'?: string;
    /**
     * 
     * @type {number}
     * @memberof Defect
     */
    'severity'?: number;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'reportedByEmail': string;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'reportedByName'?: string;
    /**
     * 
     * @type {number}
     * @memberof Defect
     */
    'upVotes'?: number;
    /**
     * 
     * @type {number}
     * @memberof Defect
     */
    'downVotes'?: number;
    /**
     * 
     * @type {string}
     * @memberof Defect
     */
    'reportedOn'?: string;
    /**
     * 
     * @type {Set<Comment>}
     * @memberof Defect
     */
    'comments'?: Set<Comment>;
    /**
     * 
     * @type {Set<StatusChange>}
     * @memberof Defect
     */
    'statusChanges'?: Set<StatusChange>;
}
/**
 * 
 * @export
 * @interface ObjectId
 */
export interface ObjectId {
    /**
     * 
     * @type {number}
     * @memberof ObjectId
     */
    'timestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectId
     */
    'counter'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectId
     */
    'randomValue1'?: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectId
     */
    'randomValue2'?: number;
    /**
     * 
     * @type {string}
     * @memberof ObjectId
     */
    'date'?: string;
}
/**
 * 
 * @export
 * @interface Offering
 */
export interface Offering {
    /**
     * 
     * @type {ObjectId}
     * @memberof Offering
     */
    'id'?: ObjectId;
    /**
     * 
     * @type {string}
     * @memberof Offering
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Offering
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Offering
     */
    'businessName'?: string;
    /**
     * 
     * @type {string}
     * @memberof Offering
     */
    'image'?: string;
    /**
     * 
     * @type {Set<Defect>}
     * @memberof Offering
     */
    'defects'?: Set<Defect>;
}
/**
 * 
 * @export
 * @interface StatusChange
 */
export interface StatusChange {
    /**
     * 
     * @type {string}
     * @memberof StatusChange
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof StatusChange
     */
    'reason'?: string;
}

/**
 * OfferingResourceApi - axios parameter creator
 * @export
 */
export const OfferingResourceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {Comment} [comment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDefectComment: async (defectId: string, offeringId: string, comment?: Comment, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'defectId' is not null or undefined
            assertParamExists('addDefectComment', 'defectId', defectId)
            // verify required parameter 'offeringId' is not null or undefined
            assertParamExists('addDefectComment', 'offeringId', offeringId)
            const localVarPath = `/api/v1/offerings/{offeringId}/defects/{defectId}/comments`
                .replace(`{${"defectId"}}`, encodeURIComponent(String(defectId)))
                .replace(`{${"offeringId"}}`, encodeURIComponent(String(offeringId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(comment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downVoteDefect: async (defectId: string, offeringId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'defectId' is not null or undefined
            assertParamExists('downVoteDefect', 'defectId', defectId)
            // verify required parameter 'offeringId' is not null or undefined
            assertParamExists('downVoteDefect', 'offeringId', offeringId)
            const localVarPath = `/api/v1/offerings/{offeringId}/defects/{defectId}/downvotes`
                .replace(`{${"defectId"}}`, encodeURIComponent(String(defectId)))
                .replace(`{${"offeringId"}}`, encodeURIComponent(String(offeringId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOfferingById: async (offeringId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'offeringId' is not null or undefined
            assertParamExists('findOfferingById', 'offeringId', offeringId)
            const localVarPath = `/api/v1/offerings/{offeringId}`
                .replace(`{${"offeringId"}}`, encodeURIComponent(String(offeringId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllOfferings: async (query?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/offerings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} offeringId 
         * @param {Defect} [defect] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportDefect: async (offeringId: string, defect?: Defect, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'offeringId' is not null or undefined
            assertParamExists('reportDefect', 'offeringId', offeringId)
            const localVarPath = `/api/v1/offerings/{offeringId}/defects`
                .replace(`{${"offeringId"}}`, encodeURIComponent(String(offeringId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(defect, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        upVoteDefect: async (defectId: string, offeringId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'defectId' is not null or undefined
            assertParamExists('upVoteDefect', 'defectId', defectId)
            // verify required parameter 'offeringId' is not null or undefined
            assertParamExists('upVoteDefect', 'offeringId', offeringId)
            const localVarPath = `/api/v1/offerings/{offeringId}/defects/{defectId}/upvotes`
                .replace(`{${"defectId"}}`, encodeURIComponent(String(defectId)))
                .replace(`{${"offeringId"}}`, encodeURIComponent(String(offeringId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OfferingResourceApi - functional programming interface
 * @export
 */
export const OfferingResourceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OfferingResourceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {Comment} [comment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addDefectComment(defectId: string, offeringId: string, comment?: Comment, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Offering>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addDefectComment(defectId, offeringId, comment, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downVoteDefect(defectId: string, offeringId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Offering>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downVoteDefect(defectId, offeringId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOfferingById(offeringId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Offering>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOfferingById(offeringId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllOfferings(query?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Offering>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllOfferings(query, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} offeringId 
         * @param {Defect} [defect] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reportDefect(offeringId: string, defect?: Defect, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Offering>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reportDefect(offeringId, defect, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async upVoteDefect(defectId: string, offeringId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Offering>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.upVoteDefect(defectId, offeringId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OfferingResourceApi - factory interface
 * @export
 */
export const OfferingResourceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OfferingResourceApiFp(configuration)
    return {
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {Comment} [comment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDefectComment(defectId: string, offeringId: string, comment?: Comment, options?: any): AxiosPromise<Offering> {
            return localVarFp.addDefectComment(defectId, offeringId, comment, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downVoteDefect(defectId: string, offeringId: string, options?: any): AxiosPromise<Offering> {
            return localVarFp.downVoteDefect(defectId, offeringId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOfferingById(offeringId: string, options?: any): AxiosPromise<Offering> {
            return localVarFp.findOfferingById(offeringId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllOfferings(query?: string, options?: any): AxiosPromise<Array<Offering>> {
            return localVarFp.listAllOfferings(query, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} offeringId 
         * @param {Defect} [defect] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportDefect(offeringId: string, defect?: Defect, options?: any): AxiosPromise<Offering> {
            return localVarFp.reportDefect(offeringId, defect, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} defectId 
         * @param {string} offeringId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        upVoteDefect(defectId: string, offeringId: string, options?: any): AxiosPromise<Offering> {
            return localVarFp.upVoteDefect(defectId, offeringId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OfferingResourceApi - interface
 * @export
 * @interface OfferingResourceApi
 */
export interface OfferingResourceApiInterface {
    /**
     * 
     * @param {string} defectId 
     * @param {string} offeringId 
     * @param {Comment} [comment] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApiInterface
     */
    addDefectComment(defectId: string, offeringId: string, comment?: Comment, options?: AxiosRequestConfig): AxiosPromise<Offering>;

    /**
     * 
     * @param {string} defectId 
     * @param {string} offeringId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApiInterface
     */
    downVoteDefect(defectId: string, offeringId: string, options?: AxiosRequestConfig): AxiosPromise<Offering>;

    /**
     * 
     * @param {string} offeringId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApiInterface
     */
    findOfferingById(offeringId: string, options?: AxiosRequestConfig): AxiosPromise<Offering>;

    /**
     * 
     * @param {string} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApiInterface
     */
    listAllOfferings(query?: string, options?: AxiosRequestConfig): AxiosPromise<Array<Offering>>;

    /**
     * 
     * @param {string} offeringId 
     * @param {Defect} [defect] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApiInterface
     */
    reportDefect(offeringId: string, defect?: Defect, options?: AxiosRequestConfig): AxiosPromise<Offering>;

    /**
     * 
     * @param {string} defectId 
     * @param {string} offeringId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApiInterface
     */
    upVoteDefect(defectId: string, offeringId: string, options?: AxiosRequestConfig): AxiosPromise<Offering>;

}

/**
 * OfferingResourceApi - object-oriented interface
 * @export
 * @class OfferingResourceApi
 * @extends {BaseAPI}
 */
export class OfferingResourceApi extends BaseAPI implements OfferingResourceApiInterface {
    /**
     * 
     * @param {string} defectId 
     * @param {string} offeringId 
     * @param {Comment} [comment] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApi
     */
    public addDefectComment(defectId: string, offeringId: string, comment?: Comment, options?: AxiosRequestConfig) {
        return OfferingResourceApiFp(this.configuration).addDefectComment(defectId, offeringId, comment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} defectId 
     * @param {string} offeringId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApi
     */
    public downVoteDefect(defectId: string, offeringId: string, options?: AxiosRequestConfig) {
        return OfferingResourceApiFp(this.configuration).downVoteDefect(defectId, offeringId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} offeringId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApi
     */
    public findOfferingById(offeringId: string, options?: AxiosRequestConfig) {
        return OfferingResourceApiFp(this.configuration).findOfferingById(offeringId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApi
     */
    public listAllOfferings(query?: string, options?: AxiosRequestConfig) {
        return OfferingResourceApiFp(this.configuration).listAllOfferings(query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} offeringId 
     * @param {Defect} [defect] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApi
     */
    public reportDefect(offeringId: string, defect?: Defect, options?: AxiosRequestConfig) {
        return OfferingResourceApiFp(this.configuration).reportDefect(offeringId, defect, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} defectId 
     * @param {string} offeringId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OfferingResourceApi
     */
    public upVoteDefect(defectId: string, offeringId: string, options?: AxiosRequestConfig) {
        return OfferingResourceApiFp(this.configuration).upVoteDefect(defectId, offeringId, options).then((request) => request(this.axios, this.basePath));
    }
}



