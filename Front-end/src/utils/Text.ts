export const truncateTextWithDots = (text: string, sizeLimit = 100) => {
    if (text.length > sizeLimit)
        return text.substring(0, sizeLimit * 2) + '...'
    return text
}