import { 
    faChevronDown, faChevronRight, faEgg, 
    faPerson, faHatWizard 
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    // Demineur
    const demineurChevronDown = faChevronDown
    const demineurChevronRight = faChevronRight

    const demineurMenuOptions = [faEgg, faPerson, faHatWizard]

    return {demineurChevronDown, demineurChevronRight, demineurMenuOptions}
};

export default Icons;