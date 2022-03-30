/**
 * Codifier for Task statuses.
 * See "package.app.entity.task.attr.status" in "${root}/etc/teqfw.schema.json"
 */
const Gtm_Base_Shared_Enum_Task_Status = {
    COMPLETED: 'COMPLETED',
    DISABLED: 'DISABLED',
    NEW: 'NEW',
    PENDING: 'PENDING',
    PROGRESS: 'PROGRESS',
}

Object.freeze(Gtm_Base_Shared_Enum_Task_Status);
export default Gtm_Base_Shared_Enum_Task_Status;
