document.addEventListener("DOMContentLoaded", function () {
    const seasonElement = document.getElementById("liturgical-season");

    const getLiturgicalSeason = () => {
        const today = new Date();
        const year = today.getFullYear();

        // Approximate dates for liturgical seasons
        const adventStart = new Date(year, 10, 27); // 4th Sunday before Christmas
        const christmasStart = new Date(year, 11, 25); // December 25
        const ordinaryTimeStart = new Date(year, 0, 10); // After Baptism of the Lord
        const lentStart = new Date(year, 1, 14); // Ash Wednesday (approx.)
        const easterStart = new Date(year, 3, 17); // Easter Sunday (approx.)
        const pentecostStart = new Date(year, 4, 27); // Pentecost Sunday (approx.)

        if (today >= adventStart && today < christmasStart) {
            return "Advent";
        } else if (today >= christmasStart && today < ordinaryTimeStart) {
            return "Christmas";
        } else if (today >= lentStart && today < easterStart) {
            return "Lent";
        } else if (today >= easterStart && today < pentecostStart) {
            return "Easter";
        } else {
            return "Ordinary Time";
        }
    };

    const season = getLiturgicalSeason();
    seasonElement.textContent = `Current Liturgical Season: ${season}`;
});