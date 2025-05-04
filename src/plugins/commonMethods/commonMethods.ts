import {useToast} from 'vue-toast-notification'
import PersianDate from 'persian-date'
import {digitsFaToEn} from '@persian-tools/persian-tools'


const $toast = useToast()

export function getKeyValue(title, value) {
    return {title, value}
}

export function getPersianTime(time, format) {
    if (!format) {
        format = 'YYYY/MM/DD - HH:mm'
    }
    let date = new Date(time)
    date.setHours(date.getHours())
    date.setMinutes(date.getMinutes())
    return new PersianDate(date).format(format)
}

export function getComboBoxKeyValueObject(title, id) {
    return {
        title,
        id
    }
}

export function bodyToQueryString(body: object) {
    if (typeof body !== 'object' || body === null) {
        return '';
    }
    const params = new URLSearchParams();
    for (const key in body) {
        if (body.hasOwnProperty(key)) {
            const value = body[key];
            if (Array.isArray(value)) {
                value.forEach(item => params.append(key + '[]', item));
            } else {
                params.append(key, value);
            }
        }
    }
    return params.toString();
}

export function groupByArray(items, groupByKey) {
    return items.reduce((groups, person) => {
        const item = person[groupByKey];
        if (!groups[item]) {
            groups[item] = [];
        }
        return groups;
    }, {});
}


export const toastHandler = {
    isDeveloping() {
        $toast.info('درحال توسعه...', {
            position: 'bottom',
        })
    },

    updateSuccess() {
        $toast.success('بروزرسانی با موفقیت انجام شد.', {
            position: 'bottom',
        })
    },
    deleteSuccess() {
        $toast.success('حذف با موفقیت انجام شد.', {
            position: 'bottom',
        })
    },
    deleteFailed() {
        $toast.error('حذف با خطا مواجه شد.', {
            position: 'bottom',
        })
    },
    updateFailed() {
        $toast.success('بروزرسانی با خطا مواجه شد.', {
            position: 'bottom',
        })
    },

    addSuccess() {
        $toast.success('افزودن داده با موفقیت انجام شد.', {
            position: 'bottom',
        })
    },
    addFailed() {
        $toast.success('افزودن داده با خطا مواجه شد.', {
            position: 'bottom',
        })
    },
    failedToast(message) {
        $toast.error(message, {
            position: 'bottom',
        })
    },
}

export {digitsFaToEn}
