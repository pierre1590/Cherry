import { View,StyleSheet} from 'react-native';

export const Card = ({ children, style }) => {
    return (
        <View style={[styles.card, style]}>
        {children}
        </View>
    );
    };

    const styles = StyleSheet.create({
        card: {
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 1,
            marginHorizontal: 10,
            marginVertical: 5,
            marginTop: 12,
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        },
    });