import { Item, User } from '../entities/types'
import { UserChanges } from '../routes/types'
import { Query } from '../use-cases/types'

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
    params: UserChanges
}
