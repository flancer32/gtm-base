/**
 * Action to save uploaded or posted Base64 encoded image to filesystem and register it in RDB.
 *
 * @namespace Gtm_Base_Back_Act_Upload_Save
 */
// MODULE'S IMPORT
import {existsSync, mkdirSync, writeFileSync} from 'fs';
import {extension} from 'mime-types';
import {join, isAbsolute} from 'path';
import {v4} from 'uuid';

// MODULE'S VARS
const NS = 'Gtm_Base_Back_Act_Upload_Save';

// MODULE'S FUNCS
/**
 * Default export is a factory to create result function in working environment (with deps).
 * @param {TeqFw_Di_Shared_SpecProxy} spec
 */
export default function (spec) {
    // DEPS
    /** @type {Gtm_Base_Back_Defaults} */
    const DEF = spec['Gtm_Base_Back_Defaults$'];
    /** @type {TeqFw_Core_Back_Config} */
    const config = spec['TeqFw_Core_Back_Config$'];
    /** @type {TeqFw_Db_Back_Api_RDb_ICrudEngine} */
    const crud = spec['TeqFw_Db_Back_Api_RDb_ICrudEngine$'];
    /** @type {Gtm_Base_Back_RDb_Schema_Upload} */
    const rdbUpload = spec['Gtm_Base_Back_RDb_Schema_Upload$'];

    // VARS
    const A_UPLOAD = rdbUpload.getAttributes();
    const _root = composeFsRoot();

    // FUNCS
    function composeFsRoot() {
        /** @type {Gtm_Base_Back_Dto_Config_Local} */
        const cfgPlugin = config.getLocal(DEF.SHARED.NAME);
        const path = cfgPlugin.uploadRoot;
        const prjRoot = config.getBoot().projectRoot;
        return (isAbsolute(path)) ? path : join(prjRoot, path);
    }

    /**
     * Result function.
     *
     * @memberOf Gtm_Base_Back_Act_Upload_Save
     *
     * @param {TeqFw_Db_Back_RDb_ITrans} trx
     * @param {string} base64 encoded string as "data:image/jpeg;base64,..."
     * @return {Promise<{id: number, uuid: *}>}
     */
    async function act({trx, base64}) {
        const uuid = v4();
        const parts = base64.split(';base64,');
        const b64File = parts.pop();
        const mime = parts[0].split(':').pop();
        const ext = extension(mime);
        const path = join(_root, uuid);
        const file = `${path}.${ext}`;
        if (!existsSync(_root)) mkdirSync(_root, {recursive: true});
        writeFileSync(file, b64File, {encoding: 'base64'});
        /** @type {Gtm_Base_Back_RDb_Schema_Upload.Dto} */
        const dto = rdbUpload.createDto({uuid});
        const {[A_UPLOAD.ID]: id} = await crud.create(trx, rdbUpload, dto);
        return {id, uuid};
    }

    // MAIN
    Object.defineProperty(act, 'namespace', {value: NS});
    return act;
}

// MODULE'S MAIN
