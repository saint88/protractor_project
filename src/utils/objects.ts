export const mergeObjects = (obj1: {}, obj2: {} | undefined): {} => {
    
    if(obj2) {
        Object.keys(obj2).map($key => {
            obj1[$key] = obj2[$key];
        })
    }

    return obj1;
}

export const joinKeyValueObject = (obj1: {}, separator: string): string => {
    return Object.keys(obj1).map($key => {
        if(obj1[$key]) {
            return `${$key}=${obj1[$key]}`
        }
    }).join(separator);
}