export default async function getCards() {
    let response = await fetch('../../data/data.json');
    return await response.json();
}