import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
   root:{
        height: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.24), transparent)'
    },
    fillHeight: {
       justifyContent: 'center',
        display: 'flex',
        flex: '1',
        alignItems: 'center',
    }
});

export default useStyles;