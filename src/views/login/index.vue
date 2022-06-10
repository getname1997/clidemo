<script lang="ts" setup >
import { ref, computed, Ref } from 'vue';
import {longestPalindrome} from "@/views/login/util";

const value:Ref = ref(3);
const currentRate = ref(0);
const rate = ref(0);
const text = computed(() => `${currentRate.value.toFixed(0)}%`);

let mums = ref([2,5,6,8,7,1,6,8])
let target = ref(9)
let nub = ref('')
// 数组找出答案
const twoSum = (mums:number[],target:number):number[] => {
	let  a = new Map()
	for (let i = 0; i < mums.length; i++) {
			if(a.has(target - mums[i])){
				nub.value = [i,a.get(target - mums[i])].join(',')
				return [i,a.get(target - mums[i])]
			}else {
				a.set(mums[i],i)
			}
	}

	return  []
}
let arr1 = [8,4,55,66,33]
let arr2 = [8,8,56,82,33]
let ustr = 'dbdsasaihgiufsaguisafgugfyasgikasfdfgsgsdabd'
// l1 = [2,4,3], l2 = [5,6,4] 输出：[7,0,8] 342 + 465 = 807.
let l1 =  [2,4,3]
let l2 =  [5,6,8]
 class ListNode {
	     val: number
	     next: ListNode | null
	    constructor(val?: number, next?: ListNode | null) {
	    this.val = (val===undefined ? 0 : val)
		  this.next = (next===undefined ? null : next)
			}
 }
 // 链表 求和
const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
		let sumList = new ListNode()
	const sumNumber = (u1:ListNode | null,u2:ListNode | null,carry:number,utt:ListNode) => {
		let b1 = u1?.val ? u1.val : 0
		let b2 =  u2?.val ? u2.val : 0
		let sum = b1+b2+carry
		let bCarry = sum >= 10 ? 1 :0
		let val = bCarry ? sum%10 : sum
		utt.val = val
		if(u1?.next || u2?.next || bCarry>0){
			utt.next = new ListNode()
			sumNumber(u1?.next || null,u2?.next || null,bCarry,utt.next)
		}
	}
	sumNumber(l1,l2,0,sumList)
	  return sumList
}


const addRate = () => {
  console.log(rate.value, currentRate.value);
  rate.value += 10;
};
</script>
<template>
  <!--  <div>我是登入页</div>-->
  <van-button
    type="primary"
    round
    @click="longestPalindrome(ustr)"
  >
    点击
  </van-button>

  <div>{{ nub }}</div>
<!--  <van-circle-->
<!--    v-model:current-rate="currentRate"-->
<!--    :rate="rate"-->
<!--    :speed="40"-->
<!--    :text="text"-->
<!--  />-->
<!--  <van-rate-->
<!--    v-model="value"-->
<!--    icon="like"-->
<!--    color="#526"-->
<!--    void-icon="like-o"-->
<!--  />-->
</template>
<style scoped>

</style>
