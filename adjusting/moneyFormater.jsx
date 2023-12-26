const moneyFormater = Intl.NumberFormat("en-US", {
    style:"currency",
    currency:"USD",
    maximumFractionDigits:0,
})
export default moneyFormater

