/**
 * Local configuration DTO for the plugin.
 * @see TeqFw_Core_Back_Config
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Back_Dto_Config_Local';

// MODULE'S CLASSES
export default class Gtm_Base_Back_Dto_Config_Local {
    /** @type {TeqFw_Db_Back_Dto_Config_Local} */
    db;
    /** @type {string} */
    logsMonitor;
    /**
     * Path to the root of uploaded files storage (relative to project root or absolute).
     * @type {string}
     */
    uploadRoot;
}

/**
 * Factory to create new DTO instances.
 * @memberOf Gtm_Base_Back_Dto_Config_Local
 */
export class Factory {
    static namespace = NS;

    constructor(spec) {
        /** @type {TeqFw_Db_Back_Dto_Config_Local.Factory} */
        const fDb = spec['TeqFw_Db_Back_Dto_Config_Local.Factory$'];
        /** @type {TeqFw_Core_Shared_Util_Cast.castString|function} */
        const castString = spec['TeqFw_Core_Shared_Util_Cast.castString'];

        /**
         * @param {Gtm_Base_Back_Dto_Config_Local|null} [data]
         * @return {Gtm_Base_Back_Dto_Config_Local}
         */
        this.create = function (data) {
            const res = new Gtm_Base_Back_Dto_Config_Local();
            res.db = fDb.create(data?.db);
            res.logsMonitor = castString(data?.logsMonitor);
            res.uploadRoot = castString(data?.uploadRoot);
            return res;
        }
    }
}
