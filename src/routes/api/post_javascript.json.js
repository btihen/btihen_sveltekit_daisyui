// // posts.json.js
// export const get = () => {
//   return {
//     status: 200,
//     body: "Welcome to my API"
//   }
// }

// posts.json.js
export const get = async () => {
  const allPostFiles = import.meta.glob('../post_javascript/**/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      // const postPath = path.slice(2, -3) // remove '.md'
      // const postPath = path.slice(2, -9) // remove '/index.md'
      // remove '/index.md'
      // https://stackoverflow.com/questions/36724574/remove-the-last-folder-from-a-path
      const path_list = path.split("/");
      const postPath = path_list.slice(0, path_list.length - 1).join("/");

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return {
    body: sortedPosts
  }
}
