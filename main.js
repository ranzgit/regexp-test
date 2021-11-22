let str = `
010-123-1234
likingyo@gmail.com
https://blog.naver.com/likingyo
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
