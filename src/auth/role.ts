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
    test = "test"
};

export enum ACTIONS {
    create = "create",
    read = "read",
    delete = "delete",
    update = "update"
};

export const PERMISSIONS = [
    {
        role: ROLE.client,
        permissions: [
            {
                resource: RESOURCES.chat,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.booking,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.preDiagnosis,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.ai,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.test,
                actions: [ ACTIONS.read ]
            },
        ]
    },
    {
        role: ROLE.employee,
        permissions: [
            {
                resource: RESOURCES.chat,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.booking,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.preDiagnosis,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.ai,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
        ]
    },
    {
        role: ROLE.admin,
        permissions: [
            {
                resource: RESOURCES.chat,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.booking,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.preDiagnosis,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.ai,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
        ]
    },
    {
        role: ROLE.superAdministrator,
        permissions: [
            {
                resource: RESOURCES.chat,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.booking,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.preDiagnosis,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
            {
                resource: RESOURCES.ai,
                actions: [ ACTIONS.create, ACTIONS.read, ACTIONS.update, ACTIONS.delete ]
            },
        ]
    },
]




