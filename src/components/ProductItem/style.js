export default {
    container:{
        display:'flex',
        alignItems:'center',
        width:'100%',
        height: 'auto',
        marginRight: '10px',
        background: '#CEB798',
        color:'#F1F1E5',
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
        margin:'0 auto',
        textAlign:'center',
        '& img':{
            width: '100%',
            
        }
        
    },
    title:{
        fontFamily: 'Mj_Dinar Two Medium',
        fontWeight:'bold',
        padding:'5px',
        fontSize:'1.1rem',
        marginTop:'0',
        
    }
}