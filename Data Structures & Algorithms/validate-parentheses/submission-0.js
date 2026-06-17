class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }
        let stack = []
        for (let i = 0;i<s.length;i++){
            if ((s[i]=='(' ) || (s[i]=='{') || (s[i]=='[')){
                stack.push(s[i])
            }
            else if ( stack[stack.length-1] !== map[s[i]] ){
                return false
            }
            else{
                stack.pop()
            }
        }
        return stack.length ===0
    }
}
