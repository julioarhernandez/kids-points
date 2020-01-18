import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1:{
        fontSize: '40vh',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        textShadow: '-1px 11px 12px black'
    }
});
export default useStyles;