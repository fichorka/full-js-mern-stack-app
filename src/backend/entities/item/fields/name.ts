export default function makeName(name: string | undefined): string {
    if (!name) {
        throw new Error('Name is required.')
    }

    if (typeof name !== 'string') {
        throw new Error('Name must be a string.')
    }

    return name
}
