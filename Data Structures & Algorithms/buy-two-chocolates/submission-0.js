class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        prices.sort((a,b) => a-b)
        let sum = 0
        sum = prices[0] + prices[1]
        if(money-sum<0) return money
        return money-sum
    }
}
