export enum ROLE {
    superAdministrator = "super-administrator",
    admin = "administrator",
    employee = "employee",
    client = "client"
};

export enum RESOURCES {
    chat = "chat",
    booking = "booking",
    preDiagnosis = "pre-diagnosis",
    ai = "AI",
    test = "test",
    userInfo = "user-info"
};

export enum ACTIONS {
    create = "create",
    read = "read",
    delete = "delete",
    update = "update"
};

// for test only
export const PERMISSIONS = {
    role: ROLE.superAdministrator,
    permissions: Object.values(RESOURCES).map(resource => ({
        resource: resource,
        actions: Object.values(ACTIONS)
    }))
}



