export function GetDictByType(type) {
    let dict = eval("(" + sessionStorage.getItem('dict') + ")");
    return dict.filter(item => item.type === type)[0].list;
}


export function GetLabelByKey(value) {
    try {
        let type = value.split("_")[0];
        let dict = eval("(" + sessionStorage.getItem('dict') + ")");
        let resArray = dict.filter(item => item.type === type)[0].list;

        return resArray.filter(item => item.value == value)[0].key;
    }
    catch
    {
        return "--"
    }


}

