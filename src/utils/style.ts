import {StyleSheet} from 'react-native'

const st = StyleSheet.create({
    textStyle: {
        color: 'white',
        fontSize: 30,
        backgroundColor: 'teal',
        margin: 20,
        padding: 20,
    }
})

const ss = StyleSheet.create({
    shadowStyle: {
        padding: 20,
        width: "80%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin:2
    }
})

const card = StyleSheet.create({
    cardStyle: {
        height: 350,
        width: 350,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2.35,
        elevation: 5,
        margin: 20
    }
})

const styles = StyleSheet.create({
    pill: {
        backgroundColor: 'black',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        padding: 20,
        marginBottom: 10,
        width: 80,
        marginTop: 20,
        textAlign: 'center',
        marginLeft: 45
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 45
    },

    image: {
        height: 200,
        width: 300,
        marginLeft: 45
    },
    btn: {
        backgroundColor: "black",
          width: 160,
          height: 50,
          borderRadius: 10,
          marginLeft: 90,
          marginTop: 20,
    },
    btnText: {
        color: "white",
            padding: 15,
            paddingLeft: 40,
            fontWeight: "bold",
    },
    
    desc: {
        marginLeft: 45,
        width: 205
    },
    rate: {
        flexDirection: 'row'
    },
    flex: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    }
    
})

export {
    st,
    ss,
    card,
    styles,

}