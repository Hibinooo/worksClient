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
        const day = date.toLocaleDateString('ru-RU', { weekday: 'long' });
        const fullDate = date.toLocaleDateString('ru-RU');
        const currentMonth = date.toLocaleDateString('ru-RU', { month: "long" })
        weekDates.push({ day, number: date.getDate(), fullDate, currentMonth });
    }

    return weekDates;
}
export default getCurrentWeekDates