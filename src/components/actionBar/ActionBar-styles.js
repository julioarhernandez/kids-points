import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root:{
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        '& > button:not(:last-child)': {
            marginRight: '1rem'
        }
    }
});

export default useStyles;