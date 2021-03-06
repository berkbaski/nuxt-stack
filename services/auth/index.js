import { post } from '../default'

class AuthService {
  login(data) {
    return post('/auth/login', data)
  }
}

export default new AuthService()
