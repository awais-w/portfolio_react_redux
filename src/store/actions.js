import { 
    NAV_STICKY, 
    NAV_NORMAL, 
    SHOWCASE_STICKY, 
    SHOWCASE_NORMAL, 
    RESUME_STICKY, 
    RESUME_NORMAL,
    SHOW_DETAILS,
    HIDE_DETAILS,
    ABOUT_ACTIVE,
    SKILLS_ACTIVE,
    EXPERIENCE_ACTIVE,
    EDUCATION_ACTIVE
} from './constants';

export const navSticky = () => ({ type: NAV_STICKY });
export const navNormal = () => ({ type: NAV_NORMAL });
export const showcaseSticky = () => ({ type: SHOWCASE_STICKY });
export const showcaseNormal = () => ({ type: SHOWCASE_NORMAL });
export const resumeSticky = () => ({ type: RESUME_STICKY });
export const resumeNormal = () => ({ type: RESUME_NORMAL });

export const aboutActive = (active) => ({ type: ABOUT_ACTIVE, active });
export const skillsActive = (active) => ({ type: SKILLS_ACTIVE, active });
export const experienceActive = (active) => ({ type: EXPERIENCE_ACTIVE, active });
export const educationActive = (active) => ({ type: EDUCATION_ACTIVE, active });

export const showDetails = id => ({ type: SHOW_DETAILS, id });
export const hideDetails = () => ({ type: HIDE_DETAILS });