import type {App} from 'vue'

import {createVuetify} from 'vuetify'
import {VBtn} from 'vuetify/components/VBtn'
import defaults from './defaults'
import {icons} from './icons'
import {themes} from './theme'
import {VTimePicker} from 'vuetify/labs/VTimePicker'
import jMoment from 'jalali-moment'
// Styles
import {VStepperVertical} from 'vuetify/labs/VStepperVertical'


import MomentUtils from '@date-io/jalaali'


import '@core/scss/template/libs/vuetify/index.scss'
import 'vuetify/styles'
import {VTreeview} from 'vuetify/labs/VTreeview'


export default function (app: App) {
    const vuetify = createVuetify({
        date: {
            adapter: new MomentUtils({
                instance: jMoment,
            }),
        },
        aliases: {
            IconBtn: VBtn,
        },
        defaults,
        icons,
        locale: {
            rtl: true,
            locale: 'fa-IR',
            // en: enUS,
            // fa: faIR,
        },
        theme: {
            defaultTheme: 'light',
            themes,
        },
        components: {
            VTimePicker,
            VTreeview,
            VStepperVertical
        },
    })

    app.use(vuetify)
}
