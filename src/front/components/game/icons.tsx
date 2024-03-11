import { 
    faChevronDown, faChevronRight, faEgg, 
    faPerson, faHatWizard
} from "@fortawesome/free-solid-svg-icons";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import TimerIcon from '@mui/icons-material/Timer';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';




const Icons = () => {
    // Contact 
    const contactGithub = GitHubIcon;
    const contactLinkedIn = LinkedInIcon;
    const contactMail = MailIcon;
    const contactTwitch = '';
    const contactYouTube = YouTubeIcon;

    // Demineur
    const demineurChevronDown = faChevronDown
    const demineurChevronRight = faChevronRight
    const demineurMenuOptions = [faEgg, faPerson, faHatWizard]
    const demineurTimer = TimerIcon;
    const demineurGpsFixed = GpsFixedIcon;
    const demineurPlayCircle = PlayCircleRoundedIcon;
    const demineurBomb = faBomb;

    // EndGameDialog
    const endGameDialogHouse = HouseRoundedIcon;
    const endGameDialogReplay = ReplayRoundedIcon;

    // GameCard
    const gameCardSports = SportsEsportsIcon;
    const gameCardEvent = EmojiEventsIcon;

    // GameNavbar
    const gameNavbarInfo = InfoIcon;
    const gameNavbarThumbUp = ThumbUpIcon;

    // Morpion
    const morpionCross = ClearRoundedIcon;
    const morpionCircle = CircleOutlinedIcon;

    // Pendu
    const penduLife = FavoriteIcon;

    // Puissance 4
    const puissance4Circle = CircleIcon;

    // Sudoku
    const sudokuReplay = ReplayRoundedIcon;
    const sudokuEdit = AutoFixHighRoundedIcon;
    const sudokuComment = DriveFileRenameOutlineRoundedIcon;
    const sudokuHint = LightbulbRoundedIcon;


    return {contactGithub, contactLinkedIn, contactMail, contactTwitch, contactYouTube,
        demineurChevronDown, demineurChevronRight, demineurMenuOptions, demineurTimer, demineurGpsFixed, demineurPlayCircle, demineurBomb,
        endGameDialogHouse, endGameDialogReplay,
        gameCardSports, gameCardEvent,
        gameNavbarInfo, gameNavbarThumbUp,
        morpionCircle, morpionCross,
        penduLife,
        puissance4Circle,
        sudokuReplay, sudokuEdit, sudokuComment, sudokuHint}
};

export default Icons;