export function orderByProps(obj, sortlist) {
    let list1 = []
    sortlist.forEach(el => (
        list1.push({key: el, value: obj[`${el}`]})
    ))

    let list2 = []
    for (let elem in obj) {
        if (elem !== 'name' && elem !== 'level') {
        list2.push([elem, obj[elem]]);
    }}
    list2.sort()

    list2.forEach(el => (
        list1.push({key: el[0], value: el[1]})
    ))
    return list1
}

export function getValue(obj) {
    let result = []
    obj.special.forEach((element) => {  
        if ('description' in element) {
            const {id, name, icon, description} = element
            result.push({id, name, icon, description})
        }
        else {
            const {id, name, icon} = element
            result.push({id, name, icon, description: "Описание недоступно"})
        }
    })
    return result
}
