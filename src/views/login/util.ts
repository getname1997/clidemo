
/*3. 无重复字符的最长子串*/
const lengthOfLongestSubstring =(s: string): number => {
    let uStr= ''
    let str = ''
    let maxLength = 0
     let  arrStr = [...s]
    arrStr.forEach(item=>{
        if(str.indexOf(item) > -1 ){
            console.log(str,str.slice(str.indexOf(item),),'截取前')
            str = str.slice(str.indexOf(item)+1,)+ item
            console.log(str,'截取后')
        }else {
            str = str + item
            if(str.length > maxLength){
                maxLength = str.length
                uStr = str
                console.log(maxLength,str,'9966666')
            }
        }
    })

    return  maxLength
};
/*4. 寻找两个正序数组的中位数*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays =  (nums1:number[], nums2:number[]):number=>{

    return 1
};


export {lengthOfLongestSubstring}
