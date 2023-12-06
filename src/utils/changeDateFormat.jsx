const changeDateFormat = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {year: "numeric", month: "2-digit", day: "2-digit"})
}

export default changeDateFormat;