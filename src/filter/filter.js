import * as fecha from "element-ui/lib/utils/date"

/**
 * 数组过滤器 例如：{{IMG | optionKV(section.charge)}}
 * @param object 例如：{IMG_FILE("IMG","图片"),VR_FILE("VR","VR"),
    VIDEO_FILE("VIDEO","视频"),
    PROJECT_DESCRIPTION_FILE("PROJECT_DESCRIPTION_FILE","项目简介图片")}
 * @param key 例如：C
 * @returns {string} 例如：收费
 */
let optionKV = (object, key) => {
    if(!object || !key){
        return "";
    }else{
        let result= "";
        for (let enums in object) {
           if(key===object[enums]['key'])
                result=object[enums]['value']
        }
        console.log("result:"+result);
        return result;
    }
};

/**
 * 数组过滤器 例如：{{IMG | optionKV(section.charge)}}
 * @param object 数据是否为空
 * @returns {string} 例如：收费
 */
let isEmptyInt= object=>{
    if(!object){
        object=0;
    }
    return object;
}

/**
 * 格式化时间 yyyy-MM-dd HH:mm:ss
 * @param {String} dateStr 时间类型
 */
let dateFormat= dateStr =>{
    return dateStr ? fecha.format(new Date(dateStr), 'yyyy-MM-dd HH:mm:ss') : '';
}
export default {
    optionKV,
    dateFormat,
    isEmptyInt
}