/**
 *  Meta data for '/app/task' entity.
 *  @namespace Gtm_Base_Back_RDb_Schema_Task
 */
// MODULE'S VARS
const NS = 'Gtm_Base_Back_RDb_Schema_Task';
/**
 * Path to the entity in plugin's DEM.
 * @type {string}
 */
const ENTITY = '/app/task';

/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Task
 * @type {Object}
 */
const ATTR = {
    DATE_CREATED: 'date_created',
    DATE_DUE: 'date_due',
    DESC: 'desc',
    GRAVEYARD_REF: 'graveyard_ref',
    ID: 'id',
    IMAGE: 'image',
    STATUS: 'status',
    TITLE: 'title',
    UUID: 'uuid',
};

// MODULE'S CLASSES
/**
 * @memberOf Gtm_Base_Back_RDb_Schema_Task
 */
class Dto {
    static namespace = NS;
    /**
     * UTC date when task was created in IDB.
     * @type {Date}
     */
    date_created;
    /**
     * UTC date when task should be completed.
     * @type {Date}
     */
    date_due;
    /**
     * Task description.
     * @type {string}
     */
    desc;
    /**
     * Backend ID for related graveyard.
     * @type {number}
     */
    graveyard_ref;
    /**
     * Backend ID for task itself.
     * @type {number}
     */
    id;
    /**
     * Code to generate URL for related image.
     * @type {string}
     */
    image;
    /**
     * @type {string}
     */
    status;
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
export default class Gtm_Base_Back_RDb_Schema_Task {
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
     * @return {typeof Gtm_Base_Back_RDb_Schema_Task.ATTR}
     */
    getAttributes() {}
}

// finalize code components for this es6-module
Object.freeze(ATTR);
