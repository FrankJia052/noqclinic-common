export enum ROLE {
    superAdministrator = "SuperAdmin",
    admin = "Admin",
    employee = "Employee",
    client = "Client"
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
    update = "update",
    readOthers = "readOthers",
};

// for test only
export const PERMISSIONS = {
    role: ROLE.superAdministrator,
    permissions: Object.values(RESOURCES).map(resource => ({
        resource: resource,
        actions: Object.values(ACTIONS)
    }))
}



