/**
 *  Meta data for '/app/upload' entity.
 *  @namespace Gtm_Base_Back_RDb_Schema_Upload
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Back_RDb_Schema_Upload';
/**
 * Path to the entity in plugin's DEM.
 * @type {string}
 */
const ENTITY = '/app/upload';

/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Upload
 * @type {Object}
 */
const ATTR = {
    DATE_CREATED: 'date_created',
    EXT: 'ext',
    ID: 'id',
    UUID: 'uuid',
};

// MODULE'S CLASSES
/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Upload
 */
class Dto {
    static namespace = NS;
    /**
     * Date-time when upload was registered.
     * @type {Date}
     */
    date_created;
    /**
     * Default extension for upload (by MIME).
     * @type {string}
     */
    ext;
    /**
     * Backend ID for upload itself.
     * @type {number}
     */
    id;
    /**
     * @type {string}
     */
    uuid;
}

// noinspection JSClosureCompilerSyntax
/**
 * @implements TeqFw_Db_Back_RDb_Meta_IEntity
 */
export default class Gtm_Base_Back_RDb_Schema_Upload {
    constructor(spec) {
        /** @type {Gtm_Base_Back_Defaults} */
        const DEF = spec['Gtm_Base_Back_Defaults$'];
        /** @type {TeqFw_Db_Back_RDb_Schema_EntityBase} */
        const base = spec['TeqFw_Db_Back_RDb_Schema_EntityBase$'];

        return base.create(this,
            `${DEF.SHARED.NAME}${ENTITY}`,
            ATTR,
            [ATTR.ID],
            Dto
        );
    }

    /**
     * @param [data]
     * @return {Gtm_Base_Back_RDb_Schema_Upload.Dto}
     */
    createDto(data) {}

    /**
     * @return {typeof Gtm_Base_Back_RDb_Schema_Upload.ATTR}
     */
    getAttributes() {}
}

// finalize code components for this es6-module
Object.freeze(ATTR);
