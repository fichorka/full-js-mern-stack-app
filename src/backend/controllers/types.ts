export interface HttpResponse {
    headers: {
        'Content-Type': string
    }
    statusCode: number
    body: {
        meta?: {
            [key: string]: string
        }
        result?: any
    }
}
