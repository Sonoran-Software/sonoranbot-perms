const PERMISSIONS = {
    NONE: 0,
    CIVILIAN: 1,
    LAWYER: 2,
    DMV: 4,
    POLICE: 8,
    FIRE: 16,
    EMS: 32,
    DISPATCH: 64,
    ADMIN: 128,
    POLRECADD: 256,
    POLRECEDIT: 512,
    POLRECREMOVE: 1024,
    POLSUPER: 2048,
    POLEDITUNIT: 4096,
    POLEDITOTHERUNIT: 8192,
    SELFDISPATCH: 16384,
    MEDRECADD: 32768,
    MEDRECEDIT: 65536,
    MEDRECREMOVE: 131072,
    MEDSUPER: 262144,
    FIRERECADD: 524288,
    FIRERECEDIT: 1048576,
    FIRERECREMOVE: 2097152,
    FIRESUPER: 4194304,
    DMVRECADD: 8388608,
    DMVRECEDIT: 16777216,
    DMVRECREMOVE: 33554432,
    DMVSUPER: 67108864,
    LAWRECADD: 134217728,
    LAWRECEDIT: 268435456,
    LAWRECREMOVE: 536870912,
    LAWSUPER: 1073741824,
    ADMINACCOUNTS: 2147483648,
    ADMINPERMISSIONKEYS: 4294967296,
    ADMINCUSTOMIZATION: 8589934592,
    ADMINDEPARTMENTS: 17179869184,
    ADMINTENCODES: 34359738368,
    ADMINPENALCODES: 68719476736,
    ADMININGAMEINTEGRATION: 137438953472,
    ADMINDISCORDINTEGRATION: 274877906944,
    ADMINLIMITS: 549755813888
}

function getBitmask(permissions) {
    var total = BigInt(0);
    permissions.forEach(element => {
        if (PERMISSIONS[element] != null) {
            total += BigInt(PERMISSIONS[element]);
        }
    });
    return total;
}

function getPermissions(bitmask) {
    if (bitmask === PERMISSIONS.NONE) return [];
    var perms = [];
    for (var flag in PERMISSIONS) {
        if (flag === 'None') continue;
        var val = BigInt(PERMISSIONS[flag]);
        if ((BigInt(bitmask) & val) === val) perms.push(flag);
    }

    return perms;
}

function addPermission(bitmask, permission) {
    if (PERMISSIONS[permission] != null) {
        let result = BigInt(BigInt(bitmask) + BigInt(PERMISSIONS[permission]));
        return result;
    } else {
        throw new EvalError(`Invalid permission ${permission}`);
    }
}

function delPermission(bitmask, permission) {
    if (PERMISSIONS[permission] != null) {
        let result = BigInt(BigInt(bitmask) - BigInt(PERMISSIONS[permission]));
        return result;
    } else {
        throw new EvalError(`Invalid permission ${permission}`);
    }
}