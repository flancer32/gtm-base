/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class Gtm_Base_Front_Defaults {
    /** @type {Gtm_Base_Shared_Defaults} */
    SHARED;

    constructor(spec) {
        this.SHARED = spec['Gtm_Base_Shared_Defaults$'];
        Object.freeze(this);
    }
}
