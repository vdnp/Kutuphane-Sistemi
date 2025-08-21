"use client"

const FormatDate = ( data, type="shrot" ) => {

    const newDate = data ? Date(data) : new Date()
    const formats = {
        short: {year: "2-digit", month: "2-digit", day: "2-digit"},
        medium: { year: "2-digit", month: "long", day: "numeric" },
        long: { weekday: "long", year: "numeric", month: "long", day: "numeric" },
    }

    const options = formats[type] || formats.short

    return newDate.toLocaleDateString('tr-TR', options)

}

export {FormatDate}