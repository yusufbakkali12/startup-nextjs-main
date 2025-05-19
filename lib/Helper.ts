export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text
  
    const truncated = text.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(" ")
    return truncated.substring(0, lastSpace) + " ..."
  }