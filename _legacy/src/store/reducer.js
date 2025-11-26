import { initialState } from './state';
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

const reducer = (state=initialState, action) => {    
    switch (action.type){
        case NAV_STICKY :
            return { 
                ...state,sticky:{...state.sticky,nav:true}
            }
        case NAV_NORMAL :
            return { 
                ...state,sticky:{...state.sticky,nav:false}
            }
        case SHOWCASE_STICKY :
            return { 
                ...state,sticky:{...state.sticky,showcase:true}
            }
        case SHOWCASE_NORMAL :
            return { 
                ...state,sticky:{...state.sticky,showcase:false}
            }
        case RESUME_STICKY :
            return { 
                ...state,sticky:{...state.sticky,resume:true}
            }
        case RESUME_NORMAL :
            return { 
                ...state,sticky:{...state.sticky,resume:false}
            }
        case SHOW_DETAILS :
            return { 
                ...state,clickedThumb:{showDetails:true, id:action.id}
            }
        case HIDE_DETAILS :
            return { 
                ...state,clickedThumb:{...state.clickedThumb, showDetails:false}
            }
        case ABOUT_ACTIVE :
            return { 
                ...state, activeResumeSection:{
                    about: action.active,
                    skills: false,
                    experience: false,
                    education: false
                }
            }
        case SKILLS_ACTIVE :
            return { 
                ...state, activeResumeSection:{
                    about: false,
                    skills: action.active,
                    experience: false,
                    education: false
                }
            }
        case EXPERIENCE_ACTIVE :
            return { 
                ...state, activeResumeSection:{
                    about: false,
                    skills: false,
                    experience: action.active,
                    education: false
                }
            }
        case EDUCATION_ACTIVE :
            return { 
                ...state, activeResumeSection:{
                    about: false,
                    skills: false,
                    experience: false,
                    education: action.active
                }
            }
        
        default :
            return {...state};     
    }
}

export default reducer;