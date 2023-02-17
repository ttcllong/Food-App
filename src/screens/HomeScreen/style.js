 
import { StyleSheet } from 'react-native'
import { colors } from '../../global/style'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    delivery_Button:{
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    },
    delivery_Text:{
        marginLeft: 5,
        fontSize: 16
    },
    iconSize: {
        width: 25,
        height: 25
    },
    filter_View:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 20

    },
    container_location:{
        flexDirection: 'row',
        backgroundColor: colors.grey5,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 40
    },
    container_clock:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        backgroundColor: colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5
    },
    header_textView:{
        backgroundColor: colors.grey5,
        paddingVertical: 3
    },
    header_text:{
        color: colors.grey2,
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    small_card:{
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin:10,
        height: 100
    },
    small_card_selected:{
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin:10,
        height: 100
    },
    small_cardText:{
        fontWeight:"bold",
        color:colors.grey2
    },
    small_cardText_Selected:{
        fontWeight:"bold",
        color:colors.cardbackground
    },
    floating_button:{
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent: 'center'
    }
})