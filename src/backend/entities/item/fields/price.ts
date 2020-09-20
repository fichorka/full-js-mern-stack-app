export default function makePrice(price: number | undefined): number {
    if (!price) {
        throw new Error('Price is required.')
    }

    if (typeof price !== 'number') {
        throw new Error('Price must be a number.')
    }

    return price
}
