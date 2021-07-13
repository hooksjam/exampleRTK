export function authHeader(): string {
    const token = localStorage.getItem('JWT')
    if (token) {
        return { headers: { Authorization: `Bearer ${token}` } }
    }
    return ''
}

export function authQuery(): string {
    const token = localStorage.getItem('JWT')
    if (token) {
        return `token=${token}`
    }
    return ''
}

function validateEmail(email): string {
    if (!email) {
        return 'Email is required'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Invalid email address'
    }
    return null
}

function validateUsername(username: string): string {
    if (!username) {
        return 'Username is required'
    }
    if (username.length < 2) {
        return 'Username must be between 2 to 30 chars'
    }
    return null
}

function validatePassword(password: string): string {
    if (!password) {
        return 'Password is required'
    }
    if (password.length < 6) {
        return 'Password must have at least 6 chars'
    }
    return null
}

function validatePasswordConfirm(password: string, passwordConfirm: string): string {
    if (!passwordConfirm) {
        return 'Password Confirm is required'
    }
    if (password !== passwordConfirm) {
        return 'Password and Password Confirm does not match'
    }
    return null
}

interface UserDef {
    username: string,
    eamil: string,
    password: string,
    passwordConfirm: string,
}
export function validateRegister(user: UserDef): string[] {
    const {
        username,
        email,
        password,
        passwordConfirm,
    } = user

    const v1 = validateEmail(email)
    const v2 = validatePassword(password)
    const v3 = validateUsername(username)
    const v4 = validatePasswordConfirm(password, passwordConfirm)
    if (v1 == null && v2 == null && v3 == null && v4 == null) {
        return null
    }

    return [v2, v3, v4].filter((x) => x != null)
}

export function validateLogin(user: UserDef): string[] {
    const {
        username,
        password,
    } = user

    const v1 = validateUsername(username)
    const v2 = validatePassword(password)
    if (v1 == null && v2 == null) {
        return null
    }
    return [v1, v2].filter((x) => x != null)
}
