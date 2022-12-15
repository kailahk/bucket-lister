module.exports = {
    index
}

async function index(req, res) {
    const suggestions = [];
    while (suggestions.length < 5) {
        const suggestion = await fetch('http://www.boredapi.com/api/activity/').then(res => res.json())
        suggestions.push(suggestion.activity)
    };
    res.json(suggestions)
};