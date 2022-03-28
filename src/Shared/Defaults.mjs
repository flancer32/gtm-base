/**
 * Plugin constants (hardcoded configuration) for shared code.
 */
export default class Gtm_Base_Shared_Defaults {
    NAME = '@flancer32/gtm-base';

    LOG_META_TYPE = 'type'; // log type in log metadata sent to logs monitor

    constructor() {
        Object.freeze(this);
    }
}
