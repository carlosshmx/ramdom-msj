const messages = [
    "carlos",
    "Henry",
    "Daniel",
    "Mario",
    "Barbara",
    "Daniela",
    "Karla",
    "Fraylin",
    "Albert",
    "Jose"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { randomMsg };