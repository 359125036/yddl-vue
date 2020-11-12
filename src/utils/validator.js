/**
 * @Author zhengxin
 * @Description 字段校验
 * @Date 2020/10/13 14:01
 */

export default {
    /**
     * @Method isEmpty
     * @Author zhengxin
     * @Description 空校验 null或""都返回true
     * @param obj 需要验证是否空的参数
     * @Return
     * @Exception
     * @Date 2020/10/13 15:23
     */
    isEmpty(obj) {
        if ((typeof obj == 'string')) {
            return !obj || obj.replace(/\s+/g, "") == ""
        } else {
            return (!obj || JSON.stringify(obj) === "{}" || obj.length === 0);
        }
    },

    /**
     * @Method isNotEmpty
     * @Author zhengxin
     * @Description 非空校验
     * @param obj 需要验证是否空的参数
     * @Return
     * @Exception
     * @Date 2020/10/13 15:33
     */
    isNotEmpty(obj){
        return !this.isEmpty(obj)
    },

    /**
     * @Method isLength
     * @Author zhengxin
     * @Description 长度校验
     * @param str 需要验证长度的参数
     * @param min 最小长度
     * @param max 最大长度
     * @Return
     * @Exception
     * @Date 2020/10/13 15:43
     */
    isLength (str, min, max) {
        return $.trim(str).length >= min && $.trim(str).length <= max
    } ,

    /**
     * @Method isEmptyMessage
     * @Author zhengxin
     * @Description 空校验提示框
     * @param value 需要验证是否空的参数
     * @param text 需要验证是否空的参数的名称
     * @param message this.$message
     * @Return
     * @Exception
     * @Date 2020/10/13 15:53
     */
    isEmptyMessage(value,text,message){
        if(this.isEmpty(value)){
            message.warning(text+"不能为空");
            return false;
        }
        return true;
    },

    /**
     * @Method authLength
     * @Author zhengxin
     * @Description 空校验提示框
     * @param value 需要验证是否空的参数
     * @param text 需要验证是否空的参数的名称
     * @param min 最小长度
     * @param max 最大长度
     * @param message this.$message
     * @Return
     * @Exception
     * @Date 2020/10/13 15:55
     */
    authLength(value,text,min, max,message){
        if(this.isEmpty(value)){
            message.warning(text+"不能为空");
            return false;
        }
        if(!this.isLength(value,min,max)){
            message.warning(text + "长度" + min + "~" + max + "位");
            return false;
        }
        return true;
    }
}