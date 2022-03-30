/**
 * (Re)create RDB structure and fill it with test data (on demand).
 *
 * @namespace Gtm_Base_Back_Cli_Db_Init
 */
// MODULE'S IMPORT

// DEFINE WORKING VARS
const NS = 'Gtm_Base_Back_Cli_Db_Init';
const OPT_TEST = 'test';

// DEFINE MODULE'S FUNCTIONS
/**
 * Factory to create CLI command.
 *
 * @param {TeqFw_Di_Shared_SpecProxy} spec
 * @returns {TeqFw_Core_Back_Api_Dto_Command}
 * @constructor
 * @memberOf Gtm_Base_Back_Cli_Db_Init
 */
export default function Factory(spec) {
    // DEPS
    /** @type {Gtm_Base_Back_Defaults} */
    const DEF = spec['Gtm_Base_Back_Defaults$'];
    /** @type {TeqFw_Core_Shared_Api_ILogger} */
    const logger = spec['TeqFw_Core_Shared_Api_ILogger$$']; // instance
    /** @type {TeqFw_Core_Back_Api_Dto_Command.Factory} */
    const fCommand = spec['TeqFw_Core_Back_Api_Dto_Command#Factory$'];
    /** @type {TeqFw_Core_Back_Api_Dto_Command_Option.Factory} */
    const fOpt = spec['TeqFw_Core_Back_Api_Dto_Command_Option#Factory$'];
    /** @type {Gtm_Base_Back_Proc_RDb_Init.process|function} */
    const procDbInit = spec['Gtm_Base_Back_Proc_RDb_Init$'];
    /** @type {TeqFw_Db_Back_RDb_IConnect} */
    const rdb = spec['TeqFw_Db_Back_RDb_IConnect$'];
    /** @type {TeqFw_Db_Back_Api_RDb_ICrudEngine} */
    const crud = spec['TeqFw_Db_Back_Api_RDb_ICrudEngine$'];
    /** @type {Gtm_Base_Back_RDb_Schema_Graveyard} */
    const rdbGraveyard = spec['Gtm_Base_Back_RDb_Schema_Graveyard$'];
    /** @type {Gtm_Base_Back_RDb_Schema_Service} */
    const rdbService = spec['Gtm_Base_Back_RDb_Schema_Service$'];
    /** @type {typeof Gtm_Base_Shared_Enum_Service_Type} */
    const SERVICE_TYPE = spec['Gtm_Base_Shared_Enum_Service_Type$'];

    // VARS
    const A_GY = rdbGraveyard.getAttributes();
    const A_SRV = rdbService.getAttributes();

    // MAIN
    logger.setNamespace(NS);

    // FUNCS
    /**
     * Command action.
     * @returns {Promise<void>}
     * @memberOf Gtm_Base_Back_Cli_Db_Init
     */
    async function action(opts) {
        // VARS
        const services = [
            {
                [A_SRV.ID]: 1,
                [A_SRV.TITLE]: "Service Company #1",
                [A_SRV.TYPE]: SERVICE_TYPE.COMPANY,
                [A_SRV.UUID]: "S000-0001",
            }, {
                [A_SRV.ID]: 2,
                [A_SRV.TITLE]: "Service Person #1",
                [A_SRV.TYPE]: SERVICE_TYPE.PERSON,
                [A_SRV.UUID]: "S001-0001",
            },
        ];
        const graveyards = [
            {
                [A_GY.ID]: 1,
                [A_GY.TITLE]: "Al Dana 1 Cemetery",
                [A_GY.SERVICE_REF]: 1,
                [A_GY.UUID]: "G000-0001",
            }, {
                [A_GY.ID]: 2,
                [A_GY.TITLE]: "Cornish Graveyard",
                [A_GY.SERVICE_REF]: 1,
                [A_GY.UUID]: "G000-0002",
            }, {
                [A_GY.ID]: 3,
                [A_GY.TITLE]: "Madinat Zayed",
                [A_GY.SERVICE_REF]: 2,
                [A_GY.UUID]: "G000-0003",
            },
        ];

        // MAIN
        const testData = opts[OPT_TEST];
        // recreate DB structure
        await procDbInit();
        if (testData) {
            const trx = await rdb.startTransaction();
            try {
                debugger
                // services
                for (const one of services) {
                    const dto = rdbService.createDto(one);
                    await crud.create(trx, rdbService, dto);
                }
                // graveyards
                for (const one of graveyards) {
                    const dto = rdbGraveyard.createDto(one);
                    await crud.create(trx, rdbGraveyard, dto);
                }
                await trx.commit();
            } catch (error) {
                await trx.rollback();
                logger.error(error);
            }
        }
        await rdb.disconnect();
    }

    Object.defineProperty(action, 'namespace', {value: NS});

    // COMPOSE RESULT
    const res = fCommand.create();
    res.realm = DEF.CLI_PREFIX;
    res.name = 'db-init';
    res.desc = '(Re)create RDB structure and fill it with test data (on demand).';
    res.action = action;
    // add option --test-data
    const optTest = fOpt.create();
    optTest.flags = `-t, --${OPT_TEST}`;
    optTest.description = `fill DB with test data (for development).`;
    res.opts.push(optTest);
    return res;
}
