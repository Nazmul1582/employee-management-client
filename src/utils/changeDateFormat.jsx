const changeDateFormat = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {year: "numeric", month: "numeric", day: "2-digit"})
}

export default changeDateFormat;