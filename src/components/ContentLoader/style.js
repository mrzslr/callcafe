export default {
    container:{
        marginTop:'1rem',
        width: '100%',
    },
    cover:{
        '& img':{
            width: '100%'
        }
    },
    waveBg:{
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        width:'50%',
        backgroundColor: 'grey',
        zIndex:'-1',

    },
    carouselCell:{
        display:'flex',
        alignItems:'center',
        width: '66%',
        height: '200px',
        marginRight: '10px',
        background: '#F1F3F7',
        borderRadius: '5px',
        counterIncrement: 'carousel-cell',
        '& :before':{
            display: 'block',
            textAlign: 'center',
            lineHeight: '200px',
            fontSize: '80px',
            color: 'white',
        }
    }
}