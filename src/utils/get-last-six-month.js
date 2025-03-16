export function getLastSixMonths() {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const result = [];
    const currentDate = new Date();
    
    for (let i = 0; i < 6; i++) {
        const monthIndex = currentDate.getMonth() - i;
        const year = currentDate.getFullYear();
        
        if (monthIndex < 0) {
            result.unshift(`${months[monthIndex + 12]} ${year - 1}`);
        } else {
            result.unshift(`${months[monthIndex]} ${year}`);
        }
    }
    
    return result;
}