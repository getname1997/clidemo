/*3. 无重复字符的最长子串*/
/**
 * @param {string} s
 * @return {number}
 * */
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
/** 6.N 型变换
*  @param {string} s
*  @param {number} numRows
*  @return {string}
* */
const convert = (s: string, numRows: number):string=>{
    let ArrList:any[] = []
    let index = s.length
    let str = ''
    let type = true
    let rows = numRows
    let x = 0
    let y = 0
    while (index > 0 ) {
        rows--
        if(!ArrList[x]){
            ArrList[x] = []
        }

        ArrList[x][y] = s[s.length - index]
        if(type){
            x++
        }else {
            x--
            y++
        }
        if(!ArrList[x]){
            ArrList[x] = []
        }
        if(rows <= 1 && numRows !== 1){
            rows = numRows
            type = !type
        }
        index--
    }
    ArrList.forEach(item=>{
        item.forEach( (u:string| undefined) =>{
            if(u){
               str+= u
            }
        })
    })
    console.log(str)
   return str
}

/**
 * 7. 整数反转
 * @param {number} x
 * @return {number}
 *
 */
const reverse = (x:number):number =>{
    let a  =  +[...Math.abs(x).toString()].reverse().join('')
    let flag = x > 0 ? 1 : 0
    let u = 2147483648 - flag
    if(a > u)return  0
    return flag?a :-a
}
/**
 * 字符串转换整数 (atoi)
 * @param {number} s
 * @return {number}
 *
 */
const myAtoi = (s: string):number => {
    let a = s.replace(/[a-zA-Z_+\s]/g,'')
    console.log(a)
    return  +a

}


export {lengthOfLongestSubstring,findMedianSortedArrays,longestPalindrome,convert,reverse,myAtoi}
