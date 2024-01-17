export const formatDate = (date: string, locale = 'ko-KR'): string => {
    if (!date || date === '') return '';
    // date 매개변수가 Date 객체가 아니라면 Date 객체로 변환
    const formattedDate = new Date(date);

    // Intl.DateTimeFormat을 사용하여 날짜를 포맷
    const formattedString = new Intl.DateTimeFormat(locale, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }).format(formattedDate);

    return formattedString;
}
