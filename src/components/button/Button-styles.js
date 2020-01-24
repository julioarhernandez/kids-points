import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    buttons: {
        border: 'none',
        position: 'relative',
        overflow: 'hidden',
        outline: 'none',
        boxShadow: '0px 9px 10px rgba(0, 0, 0, 0.1)',
        '&.-large': {
            height: '8rem',
            width: '8rem',
            '& > span': {
                fontSize: '7rem',
                fontWeight: 'bold',
                lineHeight: '4rem',
            },
        },
        '&.-medium': {
            height: '6rem',
            width: '6rem',
            '& > span': {
                fontSize: '7rem',
                fontWeight: 'bold',
                lineHeight: '4rem',
            },
        },
        '&.-small': {
            height: '3rem',
            '& > span': {
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            },
        },
        '&.-padding': {
            padding: '1rem 2rem',
        },
        '&.-rounded': {
            borderRadius: 'var(--rounded-amount-medium) var(--rounded-amount-medium) 0 var(--rounded-amount-medium)',
        },
        '&.-all-rounded': {
            borderRadius: 'var(--rounded-amount-small)',
        },
        '&.-adornment': {
            paddingLeft: '4.5rem',
            '&:before': {
                content: '">"',
                width: '3rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                top: '0',
                left: '0',
                bottom: '0',
                backgroundColor: 'var(--green-lighter)',
            },
        },
        '&.-red': {
            color: 'white',
            backgroundColor: 'var(--red-light)',
        },
        '&.-green': {
            color: 'white',
            backgroundColor: 'var(--green-lighter)',
        },
        '&.-dark-green': {
            color: 'white',
            backgroundColor: 'var(--green-dark)',
        },
        '&[disabled]':{
            opacity: '0.3',
        },
        '&:hover':{
            transform: 'scale(0.9)',
            transition: 'transform 0.4s'
        }
    }

});

export default useStyles;