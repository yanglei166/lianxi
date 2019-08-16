import { postUser } from '@/request'
export default {
  login (context, { username, password }) {
    postUser({ username, password }).then(resp => {
      console.log(resp)
      // 根据状态码改变state
      if (resp.code === 200) {
        const { displayName, id, token } = resp.body.userInfo
        context.commit('toggleLogin', { displayName, id, token })
      }
    })
  }
}
