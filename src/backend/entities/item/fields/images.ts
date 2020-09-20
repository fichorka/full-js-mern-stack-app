export default function makeImages(images: string[]): string[] {
    if (!Array.isArray(images)) {
        throw new Error('Images must be an array.')
    }

    images.forEach((image) => {
        if (!image || typeof image !== 'string') {
            throw new Error(
                'All images inside the image property must be of string type.'
            )
        }
    })

    return images
}
