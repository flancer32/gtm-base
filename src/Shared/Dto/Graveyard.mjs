/**
 * DTO to encapsulate graveyard data to display in desk app.
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Shared_Dto_Graveyard';

/**
 * @memberOf Gtm_Base_Shared_Dto_Graveyard
 * @type {Object}
 */
const ATTR = {
    BID: 'bid',
    TITLE: 'title',
    UUID: 'uuid',
};

// MODULE'S CLASSES
/**
 * @memberOf Gtm_Base_Shared_Dto_Graveyard
 */
class Dto {
    static namespace = NS;
    /** @type {number} */
    bid;
    /** @type {string} */
    title;
    /** @type {string} */
    uuid;
}

/**
 * @implements TeqFw_Core_Shared_Api_Factory_Dto_IMeta
 */
export default class Gtm_Base_Shared_Dto_Graveyard {

    constructor(spec) {
        /** @type {TeqFw_Core_Shared_Util_Cast.castInt|function} */
        const castInt = spec['TeqFw_Core_Shared_Util_Cast.castInt'];
        /** @type {TeqFw_Core_Shared_Util_Cast.castString|function} */
        const castString = spec['TeqFw_Core_Shared_Util_Cast.castString'];

        // INSTANCE METHODS
        /**
         * @param {Gtm_Base_Shared_Dto_Graveyard.Dto} data
         * @return {Gtm_Base_Shared_Dto_Graveyard.Dto}
         */
        this.createDto = function (data = null) {
            const res = new Dto();
            res.bid = castInt(data?.bid);
            res.title = castString(data?.title);
            res.uuid = castString(data?.uuid);
            return res;
        }

        this.getAttributes = () => ATTR;

        this.getAttrNames = () => Object.values(ATTR);
    }

}

// finalize code components for this es6-module
Object.freeze(ATTR);
