const isVote = (age) => {
    if (age>=18)
        return "Eligible to vote";
    else
        return "not eligible to vote";
}
module.exports = isVote