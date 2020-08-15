import DefaultAppError from "src/errors/DefaultAppError"

interface TokenPayload {
    iat: number
    exp: number
    sub: string
}

export default function (authorization: string | undefined, userAccess: number | undefined, isMobileClient: boolean | undefined): boolean {
    if (!authorization) {
        throw new DefaultAppError('Nao autorizado', 403)
    }

    if (isMobileClient) {
        container.resolve(AuthenticationHolder).setAuthenticationData({ matriz_id: Number(userAccess), userAccess: Number(userAccess) })
        return true
    }

    const [, token] = authorization?.split(' ')
    try {
        const decoded = verify(token, config.JWT_SECRET)
        const { sub } = decoded as TokenPayload

        container.resolve(AuthenticationHolder).setAuthenticationData({ matriz_id: Number(sub), userAccess: Number(userAccess) })
        return true
    } catch (error) {
        throw new DefaultAppError('JWT invalido', 403)
    }
}