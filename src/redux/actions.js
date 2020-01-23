export const LOAD_STUDY_DATES = 'LOAD_STUDY_DATES';
export const loadStudyDates = studyDates => ({
    type: LOAD_STUDY_DATES,
    studyDates
})

export const loadStudyTimes = studyTimes => ({
    type: LOAD_STUDY_TIMES,
    studyTimes
})