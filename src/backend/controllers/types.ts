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
