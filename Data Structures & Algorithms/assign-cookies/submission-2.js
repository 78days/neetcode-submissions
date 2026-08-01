class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        if(s.length ==0) return 0
         g.sort((a,b) => a-b)
         s.sort((a,b) => a-b)

        let p = 0
        let q = 0
        let count = 0
        while(p<g.length && q<s.length){
            if(g[p]<=s[q]){
                count++
                p++
                q++
            }
            else if(g[p]>s[q]){
                q++
            }
        }
        return p
    }
}
