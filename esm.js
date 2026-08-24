const isVote = (age) => {
    if (age>=18)
        return "Eligible to vote";
    else
        return "not eligible";
}
module.exports = isVote