function getCurrentWeekDates(today) {
    const currentDay = today.getDay(); // Возвращает день недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
    const currentMonth = today.getMonth()
    const weekDates = [];
    const oneDayMs = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне

    // Определяем начало текущей недели (понедельник)
    const startOfWeek = new Date(today.getTime() - (currentDay === 0 ? 6 : currentDay - 1) * oneDayMs);

    // Заполняем массив датами текущей недели
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek.getTime() + i * oneDayMs);
        const weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
        const day = date.toLocaleDateString('default', { day: '2-digit' });
        const currentMonth = date.toLocaleDateString('default', { month: "2-digit" })
        const year = date.toLocaleDateString('default', { year: "numeric" })
        const fullDate = `${year}-${currentMonth}-${day}`
        weekDates.push({ weekday, number: date.getDate(), fullDate, currentMonth });
    }

    return weekDates;
}
export default getCurrentWeekDates