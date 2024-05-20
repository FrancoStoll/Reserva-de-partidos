

export function formatDate(date: Date | undefined) {

    const newDate = new Date(date!).toLocaleDateString('en-ES', {
        weekday: "long", year: "numeric", month: "short", day: "numeric"
    })

    return newDate
}