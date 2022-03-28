/**
 * DTO to send logs to monitoring server with POST requests.
 * see Fl64_Log_Agg_Shared_WAPI_Add.Request
 *
 * TODO: move this module to TeqFw_Web plugin.
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Shared_Dto_Log_Request';

/**
 * @memberOf Gtm_Base_Shared_Dto_Log_Request
 * @type {Object}
 */
const ATTR = {
    DATE: 'date',
    LEVEL: 'level',
    MESSAGE: 'message',
    META: 'meta',
    SOURCE: 'source',
    TYPE: 'type',
};

// MODULE'S CLASSES
/**
 * @memberOf Gtm_Base_Shared_Dto_Log_Request
 */
class Dto {
    static namespace = NS;
    /**
     * Log event date (UTC).
     * @type {Date}
     */
    date;
    /**
     * Unsigned integer to indicate logged event level. Custom values.
     * @type {number}
     */
    level;
    /**
     * Log message to aggregate.
     * @type {string}
     */
    message;
    /**
     * Metadata as JSON object.
     * @type {Object}
     */
    meta;
    /**
     * Log event source (namespace, filename, process id, ...).
     * @type {string}
     */
    source;
}

/**
 * @implements TeqFw_Core_Shared_Api_Factory_Dto_IMeta
 */
export default class Gtm_Base_Shared_Dto_Log_Request {

    constructor(spec) {
        /** @type {TeqFw_Core_Shared_Util_Cast.castDate|function} */
        const castDate = spec['TeqFw_Core_Shared_Util_Cast.castDate'];
        /** @type {TeqFw_Core_Shared_Util_Cast.castInt|function} */
        const castInt = spec['TeqFw_Core_Shared_Util_Cast.castInt'];
        /** @type {TeqFw_Core_Shared_Util_Cast.castString|function} */
        const castString = spec['TeqFw_Core_Shared_Util_Cast.castString'];
        /** @type {TeqFw_Core_Shared_Dto_Formless} */
        const dtoFormless = spec['TeqFw_Core_Shared_Dto_Formless$'];

        // INSTANCE METHODS
        /**
         * @param {Gtm_Base_Shared_Dto_Log_Request.Dto} data
         * @return {Gtm_Base_Shared_Dto_Log_Request.Dto}
         */
        this.createDto = function (data = null) {
            const res = new Dto();
            res.date = castDate(data?.date);
            res.level = castInt(data?.level);
            res.message = castString(data?.message);
            res.meta = dtoFormless.createDto(data?.meta);
            res.source = castString(data?.source);
            return res;
        }

        this.getAttributes = () => ATTR;

        this.getAttrNames = () => Object.values(ATTR);
    }

}

// finalize code components for this es6-module
Object.freeze(ATTR);
