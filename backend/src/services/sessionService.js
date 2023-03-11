

class SessionService {
    constructor() {
        this._sessionMap = new Map()
    }

    put(key,value) {
        this._sessionMap.set(key, value)
    }

    get(key) {
        if(this._sessionMap.get(key) === null) {
            return null
        } else {
            return this._sessionMap.get(key)
        }
    }
}

const sessionService = new SessionService()
module.exports = sessionService