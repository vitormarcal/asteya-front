import Api from '@/services/Api'

export default {
    create (data) {
        return Api().post('/movimentos', data)
    }
}