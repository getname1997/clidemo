
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
    if(s.length < 2) return  s
    let arrS =  s
    let PalindromeStr = arrS[0]
    const IsPalindrome=(arr:string)=>{
        if(arr.length<PalindromeStr.length){
            return;
        }
        let nArrKey = arr.slice(0,-1).lastIndexOf(arr[0])
        if(nArrKey !== 0){
            IsPalindrome(arr.slice(0,nArrKey+1))
        }
        if(arr.lastIndexOf(arr[0]) > 0){
            for (let i = 0; i < arr.length >> 1; i++) {
                if(arr[i] !== arr[arr.length - i -1]){
                    return
                }
                if(i === (arr.length >> 1) -1 && arr.length > PalindromeStr.length){
                    PalindromeStr = arr
                }
            }
        }else {
            return;
        }
    }
    let i = 0
    while (i < arrS.length){
        let Arr = arrS.slice(i,arrS.lastIndexOf(arrS[i])+1)
        if(Arr.length>PalindromeStr.length){
            IsPalindrome(Arr)
        }
        i++
    }
    console.log(PalindromeStr)
    return PalindromeStr
}

export {lengthOfLongestSubstring,findMedianSortedArrays,longestPalindrome}
