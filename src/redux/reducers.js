import {
    LOAD_STUDY_DATES,
    LOAD_STUDY_TIMES,
    LOAD_CLASS
} from './actions';

const initialState = {
    studyDates: [],
    studyTimes: [],
    className: null
}

export const reducers = (state = initialState, action) => {
    if (action.type === LOAD_STUDY_DATES) {
        return Object.assign({}, state, {
            studyDates: state.studyDates
        })
    }

    if (action.type === LOAD_STUDY_TIMES) {
        return Object.assign({}, state, {
            studyTimes: state.studyTimes
        })
    }

    if (action.type === LOAD_CLASS) {
        return Object.assign({}, state, {
            className: state.className
        })
    }

    

    return state;
}