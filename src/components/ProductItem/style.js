export default {
    container:{
        display:'flex',
        alignItems:'center',
        width:'100%',
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
    },
    cover:{
        '& img':{
            width: '100%'
        }
    },
    title:{
        fontWeight:'bold',
        fontSize:'medium'
    }
}