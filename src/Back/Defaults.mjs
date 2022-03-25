/**
 * Plugin constants (hardcoded configuration) for backend code.
 */
export default class Gtm_Base_Back_Defaults {
    CLI_PREFIX = 'app';

    /** @type {TeqFw_Core_Back_Defaults} */
    MOD_CORE;

    /** @type {Gtm_Base_Shared_Defaults} */
    SHARED;

    constructor(spec) {
        this.MOD_CORE = spec['TeqFw_Core_Back_Defaults$'];
        this.SHARED = spec['Gtm_Base_Shared_Defaults$'];
        Object.freeze(this);
    }
}
