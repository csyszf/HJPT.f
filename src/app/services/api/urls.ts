const baseUrl = 'http://localhost:5000/api/';


// auth
export const auth = {
    login: baseUrl + 'auth/login',
    logout: baseUrl + 'auth/signout',
    refresh: baseUrl + 'auth/refresh',
    register: baseUrl + 'auth/signup',
}

export const content = {
    category: baseUrl + 'category',
    promotion: baseUrl + 'promotion',

    tempAnnex: baseUrl + 'annex/temp',

    topic: baseUrl + 'topic',
    recentTopic: baseUrl + 'topic/recent',

    // get-> GetMyTempTopic
    publishTopic: baseUrl + 'topic/publish',
    tempTopic: baseUrl + 'topic/draft',

    // torrent
    tempTorrent: baseUrl + 'torrent/temp',
    imageUpload: baseUrl + 'annex/img',
    nfoUpload: baseUrl + 'annex/nfo',
    torrent: baseUrl + 'topic/torrent',
}

export const user = {
    info: baseUrl+'user',
    role: baseUrl + 'role',
    addRole: baseUrl + 'user/role',
    removeRole: baseUrl + 'user/role/remove'
}

// admin
export const admin = {
    check: baseUrl + 'admin',
    category: {
        add: baseUrl + 'admin/category',
        edit: baseUrl + 'admin/category',
        delete: baseUrl + 'admin/category'
    }
}

