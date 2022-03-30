/**
 *  Meta data for '/app/graveyard' entity.
 *  @namespace Gtm_Base_Back_RDb_Schema_Graveyard
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Back_RDb_Schema_Graveyard';
/**
 * Path to the entity in plugin's DEM.
 * @type {string}
 */
const ENTITY = '/app/graveyard';

/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Graveyard
 * @type {Object}
 */
const ATTR = {
    ID: 'id',
    SERVICE_REF: 'service_ref',
    TITLE: 'title',
    UUID: 'uuid',
};

// MODULE'S CLASSES
/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Graveyard
 */
class Dto {
    static namespace = NS;
    /**
     * Backend ID for service itself.
     * @type {number}
     */
    id;
    /**
     * @type {number}
     */
    service_ref;
    /**
     * @type {string}
     */
    title;
    /**
     * @type {string}
     */
    uuid;
}

// noinspection JSClosureCompilerSyntax
/**
 * @implements TeqFw_Db_Back_RDb_Meta_IEntity
 */
export default class Gtm_Base_Back_RDb_Schema_Graveyard {
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
     * @return {typeof Gtm_Base_Back_RDb_Schema_Graveyard.ATTR}
     */
    getAttributes() {}
}

// finalize code components for this es6-module
Object.freeze(ATTR);
