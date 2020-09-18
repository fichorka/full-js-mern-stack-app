import { User } from '../entities/types'

export type Controller = (httpRequest: HttpRequest) => Promise<HttpResponse>

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

export interface HttpRequest {
    body: User
    params: {
        username?: string
    }
}
