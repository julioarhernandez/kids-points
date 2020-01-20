import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    display: {
        position: 'relative',
        overflow: 'hidden'
    },
    h1: {
        fontSize: '20vh',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        color: 'var(--blue-dark)'
    },
    gift: {
        position: 'absolute',
        right: '0',
        bottom: '0',
    },
     displayBody: {
        textAlign: 'center',
    }
});
export default useStyles;