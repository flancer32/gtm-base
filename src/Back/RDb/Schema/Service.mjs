/**
 *  Meta data for '/app/service' entity.
 *  @namespace Gtm_Base_Back_RDb_Schema_Service
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Back_RDb_Schema_Service';
/**
 * Path to the entity in plugin's DEM.
 * @type {string}
 */
const ENTITY = '/app/service';

/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Service
 * @type {Object}
 */
const ATTR = {
    ID: 'id',
    TITLE: 'title',
    TYPE: 'type',
    UUID: 'uuid',
};

// MODULE'S CLASSES
/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Service
 */
class Dto {
    static namespace = NS;
    /**
     * Backend ID for service itself.
     * @type {number}
     */
    id;
    /**
     * @type {string}
     */
    title;
    /**
     * @type {string}
     */
    type;
    /**
     * @type {string}
     */
    uuid;
}

// noinspection JSClosureCompilerSyntax
/**
 * @implements TeqFw_Db_Back_RDb_Meta_IEntity
 */
export default class Gtm_Base_Back_RDb_Schema_Service {
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
     * @return {Gtm_Base_Back_RDb_Schema_Service.Dto}
     */
    createDto(data) {}

    /**
     * @return {typeof Gtm_Base_Back_RDb_Schema_Service.ATTR}
     */
    getAttributes() {}
}

// finalize code components for this es6-module
Object.freeze(ATTR);
