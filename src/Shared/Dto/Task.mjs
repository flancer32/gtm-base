/**
 * DTO to encapsulate task data to display in desk app.
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Shared_Dto_Task';

/**
 * @memberOf Gtm_Base_Shared_Dto_Task
 * @type {Object}
 */
const ATTR = {
    BID: 'bid',
    DATE_CREATED: 'dateCreated',
    DATE_DUE: 'dateDue',
    DESC: 'desc',
    GRAVEYARD: 'graveyard',
    IMAGE_NAME: 'imageName',
    STATUS: 'status',
    TITLE: 'title',
    UUID: 'uuid',
};

// MODULE'S CLASSES
/**
 * @memberOf Gtm_Base_Shared_Dto_Task
 */
class Dto {
    static namespace = NS;
    /** @type {number} */
    bid;
    /** @type {Date} */
    dateCreated;
    /** @type {Date} */
    dateDue;
    /** @type {string} */
    desc;
    /** @type {Gtm_Base_Shared_Dto_Graveyard.Dto} */
    graveyard;
    /** @type {string} */
    imageName;
    /** @type {typeof Gtm_Base_Shared_Enum_Task_Status} */
    status;
    /** @type {string} */
    title;
    /** @type {string} */
    uuid;
}

/**
 * @implements TeqFw_Core_Shared_Api_Factory_Dto_IMeta
 */
export default class Gtm_Base_Shared_Dto_Task {

    constructor(spec) {
        /** @type {TeqFw_Core_Shared_Util_Cast.castDate|function} */
        const castDate = spec['TeqFw_Core_Shared_Util_Cast.castDate'];
        /** @type {TeqFw_Core_Shared_Util_Cast.castEnum|function} */
        const castEnum = spec['TeqFw_Core_Shared_Util_Cast.castEnum'];
        /** @type {TeqFw_Core_Shared_Util_Cast.castInt|function} */
        const castInt = spec['TeqFw_Core_Shared_Util_Cast.castInt'];
        /** @type {TeqFw_Core_Shared_Util_Cast.castString|function} */
        const castString = spec['TeqFw_Core_Shared_Util_Cast.castString'];
        /** @type {Gtm_Base_Shared_Dto_Graveyard} */
        const dtoGraveyard = spec['Gtm_Base_Shared_Dto_Graveyard$'];
        /** @type {typeof Gtm_Base_Shared_Enum_Task_Status} */
        const STATUS = spec['Gtm_Base_Shared_Enum_Task_Status$'];

        // INSTANCE METHODS
        /**
         * @param {Gtm_Base_Shared_Dto_Task.Dto} data
         * @return {Gtm_Base_Shared_Dto_Task.Dto}
         */
        this.createDto = function (data = null) {
            const res = new Dto();
            res.bid = castInt(data?.bid);
            res.dateCreated = castDate(data?.dateCreated);
            res.dateDue = castDate(data?.dateDue);
            res.desc = castString(data?.desc);
            res.graveyard = dtoGraveyard.createDto(data?.graveyard);
            res.imageName = castString(data?.imageName);
            res.status = castEnum(data?.status, STATUS);
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
