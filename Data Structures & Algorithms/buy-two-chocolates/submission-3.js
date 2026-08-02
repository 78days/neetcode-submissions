class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {

     function minimums(prices){
        let smallest = Infinity
        let small = Infinity
        // if(prices[0]>prices[1]) {
        //     small = prices[0]
        //     smallest = prices[1]
        // }
        // else{
        //     small = prices[1]
        //     smallest = prices[0]
        // }
        for(let i of prices){
            if(i<smallest){ small = smallest; smallest =i}
            else if(i>=smallest && small>i) small = i

        }
        return [smallest , small]
    }
        let [smallest , small] = minimums(prices)
        let sum = 0
        sum = smallest + small
        if(money-sum<0) return money
        return money-sum
    }
}
