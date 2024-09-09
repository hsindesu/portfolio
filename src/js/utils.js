
export function formatDate(date) {
    return new Date(date).toLocaleDateString("default", {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        timeZone: 'UTC'
    });
}