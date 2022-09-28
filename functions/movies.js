const getAllMovies = async (res, req) => {
    try {
        console.log("get mock movies");
        res.json({ ok: true })
    }
    catch (error) {
        console.log("lets suppose that i catch this error")
    }
}

module.exports = {
    getAllMovies
}