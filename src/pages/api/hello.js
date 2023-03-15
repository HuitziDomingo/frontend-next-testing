export const loadPosts = async () => {
  let res = await fetch('http://localhost:4000/users')
  let data = await res.json()

  return data
}