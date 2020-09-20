export default function makeDescription(
    description: string | undefined
): string {
    if (typeof description !== 'string') {
        throw new Error('Description must be a number.')
    }

    return description
}
