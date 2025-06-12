function easterDate(year) {
    if (year === undefined || year === null) {
        year = new Date().getFullYear();
    }
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return { year, month, day };
}

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
        const easter = easterDate(year);
        const easterStart = new Date(year, easter.month - 1, easter.day); // Easter Sunday (actual)
        // Calculate Pentecost: 49 days after Easter
        const pentecostStart = new Date(easterStart);
        pentecostStart.setDate(easterStart.getDate() + 49);

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
    console.log(`liturgical-season.js is loaded and running"`);
});