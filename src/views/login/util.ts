
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
    let arrNums = [...nums1,...nums2].sort((a,b)=>a-b)
    let c = arrNums[arrNums.length >> 1]
    return  arrNums.length%2 ?c:(c + arrNums[(arrNums.length >> 1) -1])/ 2
};

/*5. 最长回文子串 双指针处理*/
/**
* @param {string} s
* @return {string}
* */
const longestPalindrome = (s:string) :string=> {
    let arrS =  s.split('')
    let left = 0
    let right = s.length
    let PalindromeStr = ''
    const IsPalindrome=(left:number)=>{
        let  a =  arrS[left]
        if(arrS.lastIndexOf(arrS[left]) > -1 && arrS.lastIndexOf(arrS[left]) !== left){
            let  b =  arrS.slice(left,arrS.lastIndexOf(arrS[left])+1)
            for (let i = 0; i < b.length >> 1; i++) {
                if(b[i] !== b[b.length - i -1]){
                    return
                }
                if(i === (b.length >> 1)-1 && b.length > PalindromeStr.length){
                    PalindromeStr = b.join(',')
                }
            }
        }else {
            return;
        }
    }
    arrS.forEach((item,index)=>{
         IsPalindrome(index)

    })
    console.log(PalindromeStr)
    return '555'
}

export {lengthOfLongestSubstring,findMedianSortedArrays,longestPalindrome}
