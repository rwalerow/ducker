export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Rober Walerowicz',
        avater: 'https://avatars3.githubusercontent.com/u/727230?v=3&s=460',
        uid: 'rwalerow'
      })
    } , 2000)
  })
}

export function checkIfAuthed(store) {
  return store.getState().isAuthed
}

export function logout () {
  console.log('logout')
}
