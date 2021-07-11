export const updateObjectInArray = (item, itemId, objectPropName, newObjProps) => {
    return item.map(u => {
        if(u[objectPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}