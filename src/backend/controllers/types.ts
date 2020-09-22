export type Controller<T> = (
    httpRequest: HttpRequest<T>
) => Promise<HttpResponse>

export interface HttpResponse {
    headers: {
        'Content-Type': string
    }
    statusCode: number
    body?: {
        meta?: {
            status?: 'success' | 'fail' | 'error'
            message?: string
        }
        result?: any
    }
}

export interface HttpRequest<T> {
    body: T
    params: { username?: string; name?: string }
    query: any
}
