const baseData = {
    state: {
        soundPlayState: false,
        battalionItems: [],
        timeRangeItems: [
            {
                title: 'ابتدای هفته',
                value: 'firstOfWeek'
            },
            {
                title: 'ابتدای ماه',
                value: 'firstOfMonth'
            },
            {
                title: 'سه ماه أخیر',
                value: 'recent3Month'
            },
            {
                title: 'شش ماه أخیر',
                value: 'recent6Month'
            },
            {
                title: 'بازه زمانی انتخابی',
                value: 'customTimeRange'
            }
        ],
    }, getters: {
        battalionItems: (state) => state.battalionItems,
        timeRangeItems: (state) => state.timeRangeItems,
        discountTypeItems: (state) => state.discountTypeItems,
        soundPlaying: (state) => state.soundPlayState,
    },

    mutations: {
        SET_BATTALION_ITEMS: (state, payload) => {
            state.battalionItems = payload;
        },
        SET_SOUND_PLAY_STATE: (state, payload) => {
            state.soundPlayState = payload;
        }
    }, actions: {
        stopSound: () => {

        }
    },
};

export default baseData;
